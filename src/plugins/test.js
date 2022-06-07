import axios from "axios";
export default function testAlert() {

    // -----cades----
    let cadesplugin;
    let pluginObject;

    // Инициализация плагина CAdES
    // Проблемы с ActiveXObject и cpcsp_chrome_nmcades
    function initCades () {
        //already loaded
        if (window.cadesplugin) {
            return;
        }
        let plugin_resolved = 0;
        let plugin_reject;
        let plugin_resolve;
        let isOpera = 0;
        let isFireFox = 0;
        let isSafari = 0;
        let isYandex = 0;
        let canPromise = !!window.Promise;
        let cadesplugin_loaded_event_recieved = false;
        let isFireFoxExtensionLoaded = false;

        if (canPromise) {
            cadesplugin = new Promise(function (resolve, reject) {
                plugin_resolve = resolve;
                plugin_reject = reject;
            });
        } else {
            cadesplugin = {};
        }

        function check_browser() {
            let ua = navigator.userAgent, tem,
                M = ua.match(/(opera|yabrowser|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                return {name: 'IE', version: (tem[1] || '')};
            }
            if (M[1] === 'Chrome') {
                tem = ua.match(/\b(OPR|Edg|YaBrowser)\/(\d+)/);
                if (tem != null)
                    return {name: tem[1].replace('OPR', 'Opera'), version: tem[2]};
            }
            M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
            if ((tem = ua.match(/version\/(\d+)/i)) != null)
                M.splice(1, 1, tem[1]);
            return {name: M[0], version: M[1]};
        }

        let browserSpecs = check_browser();
        console.log("Спецификация браузера");
        console.log(browserSpecs);

        function cpcsp_console_log(level, msg) {
            //IE9 не может писать в консоль если не открыта вкладка developer tools
            if (typeof (console) === 'undefined')
                return;
            if (level <= cadesplugin.current_log_level) {
                if (level === cadesplugin.LOG_LEVEL_DEBUG)
                    console.log("DEBUG: %s", msg);
                if (level === cadesplugin.LOG_LEVEL_INFO)
                    console.info("INFO: %s", msg);
                if (level === cadesplugin.LOG_LEVEL_ERROR)
                    console.error("ERROR: %s", msg);
            }
        }

        function set_log_level(level) {
            if (!((level === cadesplugin.LOG_LEVEL_DEBUG) ||
                (level === cadesplugin.LOG_LEVEL_INFO) ||
                (level === cadesplugin.LOG_LEVEL_ERROR))) {
                cpcsp_console_log(cadesplugin.LOG_LEVEL_ERROR, "cadesplugin_api.js: Incorrect log_level: " + level);
                return;
            }
            cadesplugin.current_log_level = level;
            if (cadesplugin.current_log_level === cadesplugin.LOG_LEVEL_DEBUG)
                cpcsp_console_log(cadesplugin.LOG_LEVEL_INFO, "cadesplugin_api.js: log_level = DEBUG");
            if (cadesplugin.current_log_level === cadesplugin.LOG_LEVEL_INFO)
                cpcsp_console_log(cadesplugin.LOG_LEVEL_INFO, "cadesplugin_api.js: log_level = INFO");
            if (cadesplugin.current_log_level === cadesplugin.LOG_LEVEL_ERROR)
                cpcsp_console_log(cadesplugin.LOG_LEVEL_INFO, "cadesplugin_api.js: log_level = ERROR");
            if (isNativeMessageSupported()) {
                if (cadesplugin.current_log_level === cadesplugin.LOG_LEVEL_DEBUG)
                    window.postMessage("set_log_level=debug", "*");
                if (cadesplugin.current_log_level === cadesplugin.LOG_LEVEL_INFO)
                    window.postMessage("set_log_level=info", "*");
                if (cadesplugin.current_log_level === cadesplugin.LOG_LEVEL_ERROR)
                    window.postMessage("set_log_level=error", "*");
            }
        }

        function set_constantValues() {
            cadesplugin.CAPICOM_MEMORY_STORE = 0;
            cadesplugin.CAPICOM_LOCAL_MACHINE_STORE = 1;
            cadesplugin.CAPICOM_CURRENT_USER_STORE = 2;
            cadesplugin.CAPICOM_SMART_CARD_USER_STORE = 4;
            cadesplugin.CADESCOM_MEMORY_STORE = 0;
            cadesplugin.CADESCOM_LOCAL_MACHINE_STORE = 1;
            cadesplugin.CADESCOM_CURRENT_USER_STORE = 2;
            cadesplugin.CADESCOM_SMART_CARD_USER_STORE = 4;
            cadesplugin.CADESCOM_CONTAINER_STORE = 100;

            cadesplugin.CAPICOM_MY_STORE = "My";

            cadesplugin.CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED = 2;

            cadesplugin.CAPICOM_CERTIFICATE_FIND_SUBJECT_NAME = 1;

            cadesplugin.CADESCOM_XML_SIGNATURE_TYPE_ENVELOPED = 0;
            cadesplugin.CADESCOM_XML_SIGNATURE_TYPE_ENVELOPING = 1;
            cadesplugin.CADESCOM_XML_SIGNATURE_TYPE_TEMPLATE = 2;

            cadesplugin.CADESCOM_XADES_DEFAULT = 0x00000010;
            cadesplugin.CADESCOM_XADES_BES = 0x00000020;
            cadesplugin.CADESCOM_XADES_T = 0x00000050;
            cadesplugin.CADESCOM_XADES_X_LONG_TYPE_1 = 0x000005d0;
            cadesplugin.CADESCOM_XMLDSIG_TYPE = 0x00000000;

            cadesplugin.XmlDsigGost3410UrlObsolete = "http://www.w3.org/2001/04/xmldsig-more#gostr34102001-gostr3411";
            cadesplugin.XmlDsigGost3411UrlObsolete = "http://www.w3.org/2001/04/xmldsig-more#gostr3411";
            cadesplugin.XmlDsigGost3410Url = "urn:ietf:params:xml:ns:cpxmlsec:algorithms:gostr34102001-gostr3411";
            cadesplugin.XmlDsigGost3411Url = "urn:ietf:params:xml:ns:cpxmlsec:algorithms:gostr3411";

            cadesplugin.XmlDsigGost3411Url2012256 = "urn:ietf:params:xml:ns:cpxmlsec:algorithms:gostr34112012-256";
            cadesplugin.XmlDsigGost3410Url2012256 = "urn:ietf:params:xml:ns:cpxmlsec:algorithms:gostr34102012-gostr34112012-256";
            cadesplugin.XmlDsigGost3411Url2012512 = "urn:ietf:params:xml:ns:cpxmlsec:algorithms:gostr34112012-512";
            cadesplugin.XmlDsigGost3410Url2012512 = "urn:ietf:params:xml:ns:cpxmlsec:algorithms:gostr34102012-gostr34112012-512";

            cadesplugin.CADESCOM_CADES_DEFAULT = 0;
            cadesplugin.CADESCOM_CADES_BES = 1;
            cadesplugin.CADESCOM_CADES_T = 0x5;
            cadesplugin.CADESCOM_CADES_X_LONG_TYPE_1 = 0x5d;
            cadesplugin.CADESCOM_PKCS7_TYPE = 0xffff;

            cadesplugin.CADESCOM_ENCODE_BASE64 = 0;
            cadesplugin.CADESCOM_ENCODE_BINARY = 1;
            cadesplugin.CADESCOM_ENCODE_ANY = -1;

            cadesplugin.CAPICOM_CERTIFICATE_INCLUDE_CHAIN_EXCEPT_ROOT = 0;
            cadesplugin.CAPICOM_CERTIFICATE_INCLUDE_WHOLE_CHAIN = 1;
            cadesplugin.CAPICOM_CERTIFICATE_INCLUDE_END_ENTITY_ONLY = 2;

            cadesplugin.CAPICOM_CERT_INFO_SUBJECT_SIMPLE_NAME = 0;
            cadesplugin.CAPICOM_CERT_INFO_ISSUER_SIMPLE_NAME = 1;

            cadesplugin.CAPICOM_CERTIFICATE_FIND_SHA1_HASH = 0;
            cadesplugin.CAPICOM_CERTIFICATE_FIND_SUBJECT_NAME = 1;
            cadesplugin.CAPICOM_CERTIFICATE_FIND_ISSUER_NAME = 2;
            cadesplugin.CAPICOM_CERTIFICATE_FIND_ROOT_NAME = 3;
            cadesplugin.CAPICOM_CERTIFICATE_FIND_TEMPLATE_NAME = 4;
            cadesplugin.CAPICOM_CERTIFICATE_FIND_EXTENSION = 5;
            cadesplugin.CAPICOM_CERTIFICATE_FIND_EXTENDED_PROPERTY = 6;
            cadesplugin.CAPICOM_CERTIFICATE_FIND_APPLICATION_POLICY = 7;
            cadesplugin.CAPICOM_CERTIFICATE_FIND_CERTIFICATE_POLICY = 8;
            cadesplugin.CAPICOM_CERTIFICATE_FIND_TIME_VALID = 9;
            cadesplugin.CAPICOM_CERTIFICATE_FIND_TIME_NOT_YET_VALID = 10;
            cadesplugin.CAPICOM_CERTIFICATE_FIND_TIME_EXPIRED = 11;
            cadesplugin.CAPICOM_CERTIFICATE_FIND_KEY_USAGE = 12;

            cadesplugin.CAPICOM_DIGITAL_SIGNATURE_KEY_USAGE = 128;

            cadesplugin.CAPICOM_PROPID_ENHKEY_USAGE = 9;

            cadesplugin.CAPICOM_OID_OTHER = 0;
            cadesplugin.CAPICOM_OID_KEY_USAGE_EXTENSION = 10;

            cadesplugin.CAPICOM_EKU_CLIENT_AUTH = 2;
            cadesplugin.CAPICOM_EKU_SMARTCARD_LOGON = 5;
            cadesplugin.CAPICOM_EKU_OTHER = 0;

            cadesplugin.CAPICOM_AUTHENTICATED_ATTRIBUTE_SIGNING_TIME = 0;
            cadesplugin.CAPICOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_NAME = 1;
            cadesplugin.CAPICOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_DESCRIPTION = 2;
            cadesplugin.CADESCOM_AUTHENTICATED_ATTRIBUTE_SIGNING_TIME = 0;
            cadesplugin.CADESCOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_NAME = 1;
            cadesplugin.CADESCOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_DESCRIPTION = 2;
            cadesplugin.CADESCOM_AUTHENTICATED_ATTRIBUTE_MACHINE_INFO = 0x100;
            cadesplugin.CADESCOM_ATTRIBUTE_OTHER = -1;

            cadesplugin.CADESCOM_STRING_TO_UCS2LE = 0;
            cadesplugin.CADESCOM_BASE64_TO_BINARY = 1;

            cadesplugin.CADESCOM_DISPLAY_DATA_NONE = 0;
            cadesplugin.CADESCOM_DISPLAY_DATA_CONTENT = 1;
            cadesplugin.CADESCOM_DISPLAY_DATA_ATTRIBUTE = 2;

            cadesplugin.CADESCOM_ENCRYPTION_ALGORITHM_RC2 = 0;
            cadesplugin.CADESCOM_ENCRYPTION_ALGORITHM_RC4 = 1;
            cadesplugin.CADESCOM_ENCRYPTION_ALGORITHM_DES = 2;
            cadesplugin.CADESCOM_ENCRYPTION_ALGORITHM_3DES = 3;
            cadesplugin.CADESCOM_ENCRYPTION_ALGORITHM_AES = 4;
            cadesplugin.CADESCOM_ENCRYPTION_ALGORITHM_GOST_28147_89 = 25;

            cadesplugin.CADESCOM_HASH_ALGORITHM_SHA1 = 0;
            cadesplugin.CADESCOM_HASH_ALGORITHM_MD2 = 1;
            cadesplugin.CADESCOM_HASH_ALGORITHM_MD4 = 2;
            cadesplugin.CADESCOM_HASH_ALGORITHM_MD5 = 3;
            cadesplugin.CADESCOM_HASH_ALGORITHM_SHA_256 = 4;
            cadesplugin.CADESCOM_HASH_ALGORITHM_SHA_384 = 5;
            cadesplugin.CADESCOM_HASH_ALGORITHM_SHA_512 = 6;
            cadesplugin.CADESCOM_HASH_ALGORITHM_CP_GOST_3411 = 100;
            cadesplugin.CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_256 = 101;
            cadesplugin.CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_512 = 102;
            cadesplugin.CADESCOM_HASH_ALGORITHM_CP_GOST_3411_HMAC = 110;
            cadesplugin.CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_256_HMAC = 111;
            cadesplugin.CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_512_HMAC = 112;

            cadesplugin.LOG_LEVEL_DEBUG = 4;
            cadesplugin.LOG_LEVEL_INFO = 2;
            cadesplugin.LOG_LEVEL_ERROR = 1;

            cadesplugin.CADESCOM_AllowNone = 0;
            cadesplugin.CADESCOM_AllowNoOutstandingRequest = 0x1;
            cadesplugin.CADESCOM_AllowUntrustedCertificate = 0x2;
            cadesplugin.CADESCOM_AllowUntrustedRoot = 0x4;
            cadesplugin.CADESCOM_SkipInstallToStore = 0x10000000;
            cadesplugin.CADESCOM_InstallCertChainToContainer = 0x20000000;
            cadesplugin.CADESCOM_UseContainerStore = 0x40000000;

            cadesplugin.ENABLE_CARRIER_TYPE_CSP = 0x01;
            cadesplugin.ENABLE_CARRIER_TYPE_FKC_NO_SM = 0x02;
            cadesplugin.ENABLE_CARRIER_TYPE_FKC_SM = 0x04;
            cadesplugin.ENABLE_ANY_CARRIER_TYPE = 0x07;

            cadesplugin.DISABLE_EVERY_CARRIER_OPERATION = 0x00;
            cadesplugin.ENABLE_CARRIER_OPEN_ENUM = 0x01;
            cadesplugin.ENABLE_CARRIER_CREATE = 0x02;
            cadesplugin.ENABLE_ANY_OPERATION = 0x03;

            cadesplugin.CADESCOM_PRODUCT_CSP = 0;
            cadesplugin.CADESCOM_PRODUCT_OCSP = 1;
            cadesplugin.CADESCOM_PRODUCT_TSP = 2;

            cadesplugin.MEDIA_TYPE_REGISTRY = 0x00000001;
            cadesplugin.MEDIA_TYPE_HDIMAGE = 0x00000002;
            cadesplugin.MEDIA_TYPE_CLOUD = 0x00000004;
            cadesplugin.MEDIA_TYPE_SCARD = 0x00000008;

            cadesplugin.XCN_CRYPT_STRING_BASE64HEADER = 0;
            cadesplugin.AT_KEYEXCHANGE = 1;
            cadesplugin.AT_SIGNATURE = 2;

            cadesplugin.CARRIER_FLAG_REMOVABLE = 1;
            cadesplugin.CARRIER_FLAG_UNIQUE = 2;
            cadesplugin.CARRIER_FLAG_PROTECTED = 4;
            cadesplugin.CARRIER_FLAG_FUNCTIONAL_CARRIER = 8;
            cadesplugin.CARRIER_FLAG_SECURE_MESSAGING = 16;
            cadesplugin.CARRIER_FLAG_ABLE_VISUALISE_SIGNATURE = 64;
            cadesplugin.CARRIER_FLAG_VIRTUAL = 128;
        }

        function async_spawn(generatorFunc) {
            function continuer(verb, arg) {
                let result;
                try {
                    result = generator[verb](arg);
                } catch (err) {
                    return Promise.reject(err);
                }
                if (result.done) {
                    return result.value;
                } else {
                    return Promise.resolve(result.value).then(onFulfilled, onRejected);
                }
            }

            let generator = generatorFunc(Array.prototype.slice.call(arguments, 1));
            let onFulfilled = continuer.bind(continuer, "next");
            let onRejected = continuer.bind(continuer, "throw");
            return onFulfilled();
        }

        function isIE() {
            // let retVal = (("Microsoft Internet Explorer" == navigator.appName) || // IE < 11
            //     navigator.userAgent.match(/Trident\/./i)); // IE 11
            return (browserSpecs.name === 'IE' || browserSpecs.name === 'MSIE');
        }

        function isIOS() {
            return (navigator.userAgent.match(/ipod/i) ||
                navigator.userAgent.match(/ipad/i) ||
                navigator.userAgent.match(/iphone/i));
        }

        function isNativeMessageSupported() {
            // В IE работаем через NPAPI
            if (isIE())
                return false;
            // В Edge работаем через NativeMessage
            if (browserSpecs.name === 'Edg') {
                return true;
            }
            if (browserSpecs.name === 'YaBrowser') {
                isYandex = true;
                return true;
            }
            // В Chrome, Firefox, Safari и Opera работаем через асинхронную версию в зависимости от версии
            if (browserSpecs.name === 'Opera') {
                isOpera = true;
                return browserSpecs.version >= 33;
            }
            if (browserSpecs.name === 'Firefox') {
                isFireFox = true;
                return browserSpecs.version >= 52;
            }
            if (browserSpecs.name === 'Chrome') {
                return browserSpecs.version >= 42;
            }
            //В Сафари начиная с 12 версии нет NPAPI
            if (browserSpecs.name === 'Safari') {
                isSafari = true;
                return browserSpecs.version >= 12;
            }
        }

        // Функция активации объектов КриптоПро ЭЦП Browser plug-in
        function CreateObject(name) {
            if (isIOS()) {
                // На iOS для создания объектов используется функция
                // call_ru_cryptopro_npcades_10_native_bridge, определенная в IOS_npcades_supp.js
                return call_ru_cryptopro_npcades_10_native_bridge("CreateObject", [name]);
            }
            if (isIE()) {
                // В Internet Explorer создаются COM-объекты
                if (name.match(/X509Enrollment/i)) {
                    try {
                        // Объекты CertEnroll пробуем создавать через нашу фабрику,
                        // если не получилось то через CX509EnrollmentWebClassFactory
                        let objCertEnrollClassFactory = document.getElementById("webClassFactory");
                        return objCertEnrollClassFactory.CreateObject(name);
                    } catch (e) {
                        try {
                            let objWebClassFactory = document.getElementById("certEnrollClassFactory");
                            return objWebClassFactory.CreateObject(name);
                        } catch (err) {
                            throw ("Для создания обьектов X509Enrollment следует настроить веб-узел на использование проверки подлинности по протоколу HTTPS");
                        }
                    }
                }
                // Объекты CAPICOM и CAdESCOM создаются через CAdESCOM.WebClassFactory
                try {
                    let objWebClassFactory = document.getElementById("webClassFactory");
                    return objWebClassFactory.CreateObject(name);
                } catch (e) {
                    // Для версий плагина ниже 2.0.12538
                    // eslint-disable-next-line no-undef
                    return new ActiveXObject(name);
                }
            }
            // создаются объекты NPAPI
            return pluginObject.CreateObject(name);
        }

        function decimalToHexString(number) {
            if (number < 0) {
                number = 0xFFFFFFFF + number + 1;
            }

            return number.toString(16).toUpperCase();
        }

        function GetMessageFromException(e) {
            let err = e.message;
            if (!err) {
                err = e;
            } else if (e.number) {
                err += " (0x" + decimalToHexString(e.number) + ")";
            }
            return err;
        }

        function getLastError(exception) {
            if (isNativeMessageSupported() || isIE() || isIOS()) {
                return GetMessageFromException(exception);
            }

            try {
                return pluginObject.getLastError();
            } catch (e) {
                return GetMessageFromException(exception);
            }
        }

        // Функция для удаления созданных объектов
        function ReleasePluginObjects() {
            // eslint-disable-next-line no-undef
            return cpcsp_chrome_nmcades.ReleasePluginObjects();
        }

        // Функция активации асинхронных объектов КриптоПро ЭЦП Browser plug-in
        function CreateObjectAsync(name) {
            return pluginObject.CreateObjectAsync(name);
        }

        //Функции для IOS
        let ru_cryptopro_npcades_10_native_bridge = {
            callbacksCount: 1,
            callbacks: {},

            // Automatically called by native layer when a result is available
            resultForCallback: function resultForCallback(callbackId, resultArray) {
                let callback = ru_cryptopro_npcades_10_native_bridge.callbacks[callbackId];
                if (!callback) return;
                callback.apply(null, resultArray);
            },

            // Use this in javascript to request native objective-c code
            // functionName : string (I think the name is explicit :p)
            // args : array of arguments
            // callback : function with n-arguments that is going to be called when the native code returned
            call: function call(functionName, args, callback) {
                let hasCallback = callback && typeof callback === "function";
                let callbackId = hasCallback ? ru_cryptopro_npcades_10_native_bridge.callbacksCount++ : 0;

                if (hasCallback)
                    ru_cryptopro_npcades_10_native_bridge.callbacks[callbackId] = callback;

                let iframe = document.createElement("IFRAME");
                let arrObjs = new Array("_CPNP_handle");
                try {
                    iframe.setAttribute("src", "cpnp-js-call:" + functionName + ":" + callbackId + ":" + encodeURIComponent(JSON.stringify(args, arrObjs)));
                } catch (e) {
                    alert(e);
                }
                document.documentElement.appendChild(iframe);
                iframe.parentNode.removeChild(iframe);
                iframe = null;
            }
        };

        function call_ru_cryptopro_npcades_10_native_bridge(functionName, array) {
            let tmpobj;
            let ex;
            ru_cryptopro_npcades_10_native_bridge.call(functionName, array, function (e, response) {
                ex = e;
                let str = 'tmpobj=' + response;
                eval(str);
                if (typeof (tmpobj) === "string") {
                    tmpobj = tmpobj.replace(/\\\n/gm, "\n");
                    tmpobj = tmpobj.replace(/\\\r/gm, "\r");
                }
            });
            if (ex)
                throw ex;
            return tmpobj;
        }

        function show_firefox_missing_extension_dialog() {
            if (!window.cadesplugin_skip_extension_install) {
                let ovr = document.createElement('div');
                ovr.id = "cadesplugin_ovr";
                ovr.style = "visibility: hidden; position: fixed; left: 0px; top: 0px; width:100%; height:100%; background-color: rgba(0,0,0,0.7)";
                ovr.innerHTML = "<div id='cadesplugin_ovr_item' style='position:relative; width:400px; margin:100px auto; background-color:#fff; border:2px solid #000; padding:10px; text-align:center; opacity: 1; z-index: 1500'>" +
                    "<button id='cadesplugin_close_install' style='float: right; font-size: 10px; background: transparent; border: 1; margin: -5px'>X</button>" +
                    "<p>Для работы КриптоПро ЭЦП Browser plugin на данном сайте необходимо расширение для браузера. Убедитесь, что оно у Вас включено или установите его." +
                    "<p><a href='https://www.cryptopro.ru/sites/default/files/products/cades/extensions/firefox_cryptopro_extension_latest.xpi'>Скачать расширение</a></p>" +
                    "</div>";
                document.getElementsByTagName("Body")[0].appendChild(ovr);
                document.getElementById("cadesplugin_close_install").addEventListener('click', function () {
                    plugin_loaded_error("Плагин недоступен");
                    document.getElementById("cadesplugin_ovr").style.visibility = 'hidden';
                });

                ovr.addEventListener('click', function () {
                    plugin_loaded_error("Плагин недоступен");
                    document.getElementById("cadesplugin_ovr").style.visibility = 'hidden';
                });
                ovr.style.visibility = "visible";
            }
        }

        function firefox_or_safari_nmcades_onload() {
            if (window.cadesplugin_extension_loaded_callback)
                window.cadesplugin_extension_loaded_callback();
            isFireFoxExtensionLoaded = true;
            // eslint-disable-next-line no-undef
            cpcsp_chrome_nmcades.check_chrome_plugin(plugin_loaded, plugin_loaded_error);
        }

        function nmcades_api_onload() {
            if (!isIE() && !isFireFox && !isSafari) {
                if (window.cadesplugin_extension_loaded_callback)
                    window.cadesplugin_extension_loaded_callback();
            }
            window.postMessage("cadesplugin_echo_request", "*");
            window.addEventListener("message", function (event) {
                if (typeof (event.data) !== "string" || !event.data.match("cadesplugin_loaded"))
                    return;
                if (cadesplugin_loaded_event_recieved)
                    return;
                if (isFireFox || isSafari) {
                    // Для Firefox, Сафари вместе с сообщением cadesplugin_loaded прилетает url для загрузки nmcades_plugin_api.js
                    let url = event.data.substring(event.data.indexOf("url:") + 4);
                    if (!url.match("^moz-extension://[a-zA-Z0-9-]+/nmcades_plugin_api.js$")
                        && !url.match("^safari-extension://[a-zA-Z0-9-]+/[a-zA-Z0-9]+/nmcades_plugin_api.js$")) {
                        cpcsp_console_log(cadesplugin.LOG_LEVEL_ERROR, "Bad url \"" + url + "\" for load CryptoPro Extension for CAdES Browser plug-in");
                        plugin_loaded_error();
                        return;
                    }
                    let fileref = document.createElement('script');
                    fileref.setAttribute("type", "text/javascript");
                    fileref.setAttribute("src", url);
                    fileref.onerror = plugin_loaded_error;
                    fileref.onload = firefox_or_safari_nmcades_onload;
                    document.getElementsByTagName("head")[0].appendChild(fileref);
                } else {
                    // eslint-disable-next-line no-undef
                    cpcsp_chrome_nmcades.check_chrome_plugin(plugin_loaded, plugin_loaded_error);
                }
                cadesplugin_loaded_event_recieved = true;
            }, false);
        }

        //Загружаем расширения для Chrome, Opera, YaBrowser, FireFox, Edge, Safari
        function load_extension() {
            if (isFireFox || isSafari) {
                // вызываем callback руками т.к. нам нужно узнать ID расширения. Он уникальный для браузера.
                nmcades_api_onload();
            } else {
                // в асинхронном варианте для Yandex и Opera подключаем расширение из Opera store.
                if (isOpera || isYandex) {
                    let fileref = document.createElement('script');
                    fileref.setAttribute("type", "text/javascript");
                    fileref.setAttribute("src", "chrome-extension://epebfcehmdedogndhlcacafjaacknbcm/nmcades_plugin_api.js");
                    fileref.onerror = plugin_loaded_error;
                    fileref.onload = nmcades_api_onload;
                    document.getElementsByTagName("head")[0].appendChild(fileref);
                } else {
                    console.log("chrome");
                    // для Chrome, Chromium, Chromium Edge расширение из Chrome store
                    let fileref = document.createElement('script');
                    fileref.setAttribute("type", "text/javascript");
                    fileref.setAttribute("src", "chrome-extension://iifchhfnnmpdbibifmljnfjhpififfog/nmcades_plugin_api.js");
                    fileref.onerror = plugin_loaded_error;
                    fileref.onload = nmcades_api_onload;
                    document.getElementsByTagName("head")[0].appendChild(fileref);
                }
            }
        }

        function loadChromeExtension() {
            //already loaded
            if(window.cpcsp_chrome_nmcades)
                return;

            let cpcsp_chrome_nmcades = {};
            var callbackFuncs = [];

            function Print2Digit(digit)
            {
                return (digit<10) ? "0"+digit : digit;
            }

            function DateToUTCStr(d)
            {
                let ret = d.getUTCFullYear() + "-";
                ret = ret + Print2Digit(d.getUTCMonth() + 1) ;
                ret = ret + "-";
                ret = ret + Print2Digit(d.getUTCDate()) + "T";
                ret = ret + Print2Digit(d.getUTCHours()) + ":" + Print2Digit(d.getUTCMinutes()) + ":" + Print2Digit(d.getUTCSeconds()) + ".";
                let ms = d.getUTCMilliseconds();
                if(ms < 100)
                {
                    if(ms < 10)
                        ms = "00" + ms;
                    else
                        ms = "0" + ms;
                }
                ret = ret + ms + "Z";
                return ret;
            }

            function cpcsp_console_log(level, msg)
            {
                if (level <= cadesplugin.current_log_level){
                    if (level === cadesplugin.LOG_LEVEL_DEBUG)
                        console.log("DEBUG: %s", msg);
                    if (level === cadesplugin.LOG_LEVEL_INFO)
                        console.info("INFO: %s", msg);
                    if (level === cadesplugin.LOG_LEVEL_ERROR)
                        console.error("ERROR: %s", msg);
                }
            }

            // eslint-disable-next-line no-unused-vars
            function set_log_level(level)
            {
                cadesplugin.current_log_level = level;
                if (cadesplugin.current_log_level === cadesplugin.LOG_LEVEL_DEBUG)
                    cpcsp_console_log(cadesplugin.LOG_LEVEL_INFO, "log_level = DEBUG");
                if (cadesplugin.current_log_level === cadesplugin.LOG_LEVEL_INFO)
                    cpcsp_console_log(cadesplugin.LOG_LEVEL_INFO, "log_level = INFO");
                if (cadesplugin.current_log_level === cadesplugin.LOG_LEVEL_ERROR)
                    cpcsp_console_log(cadesplugin.LOG_LEVEL_INFO, "log_level = ERROR");
            }

            function check_chrome_plugin(plugin_loaded, plugin_loaded_error)
            {
                cadesplugin.async_spawn(function*(args){
                    try {
                        let pluginObject = yield CreatePluginObject();
                        // eslint-disable-next-line no-unused-vars
                        let oAbout = yield pluginObject.CreateObjectAsync("CAdESCOM.About");
                        cadesplugin.set(pluginObject);
                        args[0]();
                    } catch(err) {
                        args[1]("РџР»Р°РіРёРЅ РЅРµРґРѕСЃС‚СѓРїРµРЅ");
                    }
                }, plugin_loaded, plugin_loaded_error);

            }
            cpcsp_chrome_nmcades.check_chrome_plugin = check_chrome_plugin;

            //Р·РЅР°С‡РµРЅРёСЏ С„СѓРЅРєС†РёР№ РґР»СЏ РѕР±СЃР»СѓР¶РёРІР°РЅРёСЏ Promise
            let g_resolve_function = {};
            let g_reject_function = {};
            let g_request_id = 1;

            function Json_to_javascript(data)
            {
                if(data.retval.type === "object")
                {
                    let obj = {};
                    obj['objid'] = data.retval.value;
                    if(typeof data.retval.properties === "object")
                    {
                        const props = data.retval.properties;
                        for(let i = 0; i < props.length; i++)
                        {
                            //                Object.defineProperty(obj, props[i], {get : CallGetProperty.bind(obj, props[i]),
                            //                                                      set : CallSetProperty.bind(obj, props[i])});
                            Object.defineProperty(obj, props[i], {get : CallGetProperty.bind(obj, props[i])});
                            obj["propset_" + props[i]] = CallSetProperty.bind(obj, props[i]);
                        }
                    }
                    if(typeof data.retval.methods === "object")
                    {
                        const methods = data.retval.methods;
                        for(let i = 0; i < methods.length; i++)
                        {
                            obj[methods[i]] = CallMethod.bind(obj, methods[i]);
                        }

                    }
                    return obj;
                }
                if(data.retval.type === "string")
                {
                    return data.retval.value;
                }
                if(data.retval.type === "number")
                {
                    return parseInt(data.retval.value);
                }
                if(data.retval.type === "boolean")
                {
                    return Boolean(data.retval.value);
                }
                if(data.retval.type === "OK")
                {
                    return;
                }
            }

            function CallMethod(){
                //create message structure
                g_request_id++;
                let args = new Array();
                let arg;
                for(let i = 1; i < arguments.length; i++)
                {
                    if (typeof arguments[i] === "object")
                    {
                        if (arguments[i] instanceof Date)
                        {
                            arg = { type: "string", value: DateToUTCStr(arguments[i]) };
                            args.push(arg);
                            continue;
                        }
                        arg = { type: typeof arguments[i], value: arguments[i]["objid"] };
                        args.push(arg);
                        continue;
                    }
                    else if (typeof arguments[i] === "function") {
                        let j = 0;
                        for (; j < callbackFuncs.length; j++) {
                            if (arguments[i] === callbackFuncs[j].value) {
                                let func;
                                func = { type: "function", id: j, value: arguments[i] };
                                arg = { type: "number", value: func.id };
                                args.push(arg);
                                break;
                            }
                        }
                        if (j !== callbackFuncs.length)
                            continue;
                        let func;
                        func = { type: "function", id: callbackFuncs.length, value: arguments[i] };
                        callbackFuncs.push(func);
                        arg = { type: "number", value: func.id };
                        args.push(arg);
                        continue;
                    }
                    arg = {type: typeof arguments[i], value: arguments[i]};
                    args.push(arg);
                }
                let object_messsage;
                object_messsage = {destination:"nmcades", requestid: g_request_id, objid: this["objid"], method: arguments[0],
                    params: args};
                cpcsp_console_log(cadesplugin.LOG_LEVEL_DEBUG, "nmcades_plugin_api.js: Sent message:" + JSON.stringify(object_messsage));
                const requestPromise = new Promise ( function (resolve, reject) {
                    g_resolve_function[g_request_id] = resolve;
                    g_reject_function[g_request_id] = reject;
                    window.postMessage( object_messsage, "*");
                });
                return requestPromise.then(function (result) {
                    return Json_to_javascript(result.data);
                });
            }

            function CreatePluginObject()
            {
                //create message structure
                g_request_id++;
                const docURL = window.document.URL;
                let object_messsage;
                object_messsage = {destination:"nmcades", requestid: g_request_id, type: "init", url: docURL};
                cpcsp_console_log(cadesplugin.LOG_LEVEL_DEBUG, "nmcades_plugin_api.js: Sent message:" + JSON.stringify(object_messsage));
                const requestPromise = new Promise ( function (resolve, reject) {
                    g_resolve_function[g_request_id] = resolve;
                    g_reject_function[g_request_id] = reject;
                    window.postMessage( object_messsage, "*");
                });
                return requestPromise.then(function (result) {
                    let obj = {};
                    obj['objid'] = result.data.value;
                    obj.CreateObjectAsync = CallMethod.bind(obj, "CreateObject");
                    return obj;
                });
            }
            cpcsp_chrome_nmcades.CreatePluginObject = CreatePluginObject;

            function ReleasePluginObjects()
            {
                //create message structure
                g_request_id++;
                const docURL = window.document.URL;
                let object_messsage;
                object_messsage = {destination:"nmcades", requestid: g_request_id, type: "reset", url: docURL};
                cpcsp_console_log(cadesplugin.LOG_LEVEL_DEBUG, "nmcades_plugin_api.js: Sent message:" + JSON.stringify(object_messsage));
                const requestPromise = new Promise ( function (resolve, reject) {
                    g_resolve_function[g_request_id] = resolve;
                    g_reject_function[g_request_id] = reject;
                    window.postMessage( object_messsage, "*");
                });
                return requestPromise.then(function (result) {
                    if (result.data.value == 0)
                        return true;
                    return false;
                });
            }
            cpcsp_chrome_nmcades.ReleasePluginObjects = ReleasePluginObjects;

            function CallGetProperty(){
                g_request_id++;
                let object_messsage = {destination:"nmcades", requestid: g_request_id, objid: this['objid'], get_property: arguments[0]};
                cpcsp_console_log(cadesplugin.LOG_LEVEL_DEBUG, "nmcades_plugin_api.js: Sent message:" + JSON.stringify(object_messsage));
                const requestPromise = new Promise ( function (resolve, reject) {
                    g_resolve_function[g_request_id] = resolve;
                    g_reject_function[g_request_id] = reject;
                    window.postMessage( object_messsage, "*");
                });
                return requestPromise.then(function (result) {
                    return Json_to_javascript(result.data);
                });
            }

            function CallSetProperty(){
                g_request_id++;
                let args = new Array();
                let arg;
                if(typeof arguments[1] === "object")
                {
                    if(arguments[1] instanceof Date)
                    {
                        arg = {type: "string", value: DateToUTCStr(arguments[1])};
                    }else
                    {
                        arg = {type: typeof arguments[1], value: arguments[1]["objid"]};
                    }
                }else {
                    arg = {type: typeof arguments[1], value: arguments[1]};
                }
                args.push(arg);
                let object_messsage = {destination:"nmcades", requestid: g_request_id, objid: this['objid'], set_property: arguments[0], params: args};
                cpcsp_console_log(cadesplugin.LOG_LEVEL_DEBUG, "nmcades_plugin_api.js: Sent message:" + JSON.stringify(object_messsage));
                const requestPromise = new Promise ( function (resolve, reject) {
                    g_resolve_function[g_request_id] = resolve;
                    g_reject_function[g_request_id] = reject;
                    window.postMessage( object_messsage, "*");
                });
                return requestPromise.then(function (result) {
                    return Json_to_javascript(result.data);
                });
            }

            function windowListner (event){
                if (event.source !== window)
                    return;
                if (event.data.tabid) {
                    cpcsp_console_log(cadesplugin.LOG_LEVEL_DEBUG, "nmcades_plugin_api.js: Received message: " + JSON.stringify(event.data));
                    if(event.data.data.type === "result"){
                        if(g_resolve_function[event.data.data.requestid] === null) {
                            return;
                        }
                        g_resolve_function[event.data.data.requestid](event.data);
                        g_reject_function[event.data.data.requestid] = null;
                        g_resolve_function[event.data.data.requestid] = null;
                    }
                    else if(event.data.data.type === "error"){
                        g_reject_function[event.data.data.requestid](event.data.data);
                        g_resolve_function[event.data.data.requestid] = null;
                        g_reject_function[event.data.data.requestid] = null;
                    }
                }
            }

            function EnableInternalCSPListener(event){
                if (event.source !== window)
                    return;
                if (event.data === "EnableInternalCSP_request")
                    window.postMessage("EnableInternalCSP=" + cadesplugin.EnableInternalCSP, "*");
            }

            function storeCallback(event){
                if (event.source !== window)
                    return;
                if (event.data.object !== undefined) {
                    var certobj = JSON.parse(event.data.object);
                    var cert = Json_to_javascript(certobj.data);
                    var id = event.data.value;
                    callbackFuncs[id].value(cert);
                    return;
                }
            }

            window.addEventListener("message", windowListner, false);
            window.addEventListener("message", EnableInternalCSPListener, false);
            window.addEventListener("message", storeCallback, false);
            window.postMessage("EnableInternalCSP=" + cadesplugin.EnableInternalCSP, "*");
            window.cpcsp_chrome_nmcades = cpcsp_chrome_nmcades;
        }
        loadChromeExtension();

        //Загружаем плагин для NPAPI
        function load_npapi_plugin() {
            console.log("NPAPI");
            let elem = document.createElement('object');
            elem.setAttribute("id", "cadesplugin_object");
            elem.setAttribute("type", "application/x-cades");
            elem.setAttribute("style", "visibility: hidden");
            document.getElementsByTagName("body")[0].appendChild(elem);
            pluginObject = document.getElementById("cadesplugin_object");
            if (isIE()) {
                let elem1 = document.createElement('object');
                elem1.setAttribute("id", "certEnrollClassFactory");
                elem1.setAttribute("classid", "clsid:884e2049-217d-11da-b2a4-000e7bbb2b09");
                elem1.setAttribute("style", "visibility: hidden");
                document.getElementsByTagName("body")[0].appendChild(elem1);
                let elem2 = document.createElement('object');
                elem2.setAttribute("id", "webClassFactory");
                elem2.setAttribute("classid", "clsid:B04C8637-10BD-484E-B0DA-B8A039F60024");
                elem2.setAttribute("style", "visibility: hidden");
                document.getElementsByTagName("body")[0].appendChild(elem2);
            }
        }

        //Отправляем событие что все ок.
        function plugin_loaded() {
            plugin_resolved = 1;
            if (canPromise) {
                plugin_resolve();
            } else {
                window.postMessage("cadesplugin_loaded", "*");
            }
        }

        //Отправляем событие что сломались.
        function plugin_loaded_error(msg) {
            if (typeof (msg) === 'undefined' || typeof (msg) === 'object')
                msg = "Плагин недоступен";
            plugin_resolved = 1;
            if (canPromise) {
                plugin_reject(msg);
            } else {
                window.postMessage("cadesplugin_load_error", "*");
            }
        }

        //проверяем что у нас хоть какое то событие ушло, и если не уходило кидаем еще раз ошибку
        function check_load_timeout() {
            if (plugin_resolved === 1)
                return;
            if (isFireFox) {
                if (!isFireFoxExtensionLoaded)
                    show_firefox_missing_extension_dialog();
            }
            plugin_resolved = 1;
            if (canPromise) {
                plugin_reject("Истекло время ожидания загрузки плагина");
            } else {
                window.postMessage("cadesplugin_load_error", "*");
            }

        }

        function check_npapi_plugin() {
            try {
                CreateObject("CAdESCOM.About");
                plugin_loaded();
            } catch (err) {
                document.getElementById("cadesplugin_object").style.display = 'none';
                // Объект создать не удалось, проверим, установлен ли
                // вообще плагин. Такая возможность есть не во всех браузерах
                let mimetype = navigator.mimeTypes["application/x-cades"];
                if (mimetype) {
                    let plugin = mimetype.enabledPlugin;
                    if (plugin) {
                        plugin_loaded_error("Плагин загружен, но не создаются обьекты");
                    } else {
                        plugin_loaded_error("Ошибка при загрузке плагина");
                    }
                } else {
                    plugin_loaded_error("Плагин недоступен");
                }
            }
        }

        //Проверяем работает ли плагин
        function check_plugin_working() {
            console.log("check!!")
            let div = document.createElement("div");
            div.innerHTML = "<!--[if lt IE 9]><i></i><![endif]-->";
            let isIeLessThan9 = (div.getElementsByTagName("i").length === 1);
            if (isIeLessThan9) {
                plugin_loaded_error("Internet Explorer версии 8 и ниже не поддерживается");
                return;
            }

            if (isNativeMessageSupported()) {
                console.log("isNativeMessageSupported");
                load_extension();
            } else if (!canPromise) {
                console.log("!canPromise");
                window.addEventListener("message", function (event) {
                        if (event.data !== "cadesplugin_echo_request")
                            return;
                        load_npapi_plugin();
                        check_npapi_plugin();
                    },
                    false);
            } else {
                console.log("else");
                if (document.readyState === "complete") {
                    load_npapi_plugin();
                    check_npapi_plugin();
                } else {
                    window.addEventListener("load", function () {
                        load_npapi_plugin();
                        check_npapi_plugin();
                    }, false);
                }
            }
        }

        function set_pluginObject(obj) {
            pluginObject = obj;
            console.log("Сет обжект")
            console.log(obj);
            console.log(pluginObject);
        }

        function is_capilite_enabled() {
            return !!((typeof (cadesplugin.EnableInternalCSP) !== 'undefined') && cadesplugin.EnableInternalCSP);
        }

        //Export
        cadesplugin.JSModuleVersion = "2.3.2";
        cadesplugin.async_spawn = async_spawn;
        cadesplugin.set = set_pluginObject;
        cadesplugin.set_log_level = set_log_level;
        cadesplugin.getLastError = getLastError;
        cadesplugin.is_capilite_enabled = is_capilite_enabled;

        if (isNativeMessageSupported()) {
            cadesplugin.CreateObjectAsync = CreateObjectAsync;
            cadesplugin.ReleasePluginObjects = ReleasePluginObjects;
        }

        if (!isNativeMessageSupported()) {
            cadesplugin.CreateObject = CreateObject;
        }

        if (window.cadesplugin_load_timeout) {
            setTimeout(check_load_timeout, window.cadesplugin_load_timeout);
        } else {
            setTimeout(check_load_timeout, 20000);
        }

        set_constantValues();

        cadesplugin.current_log_level = cadesplugin.LOG_LEVEL_ERROR;
        window.cadesplugin = cadesplugin;
        check_plugin_working();

        console.log("Плагин CAdES");
        console.log(cadesplugin);
        console.log("pluginObject");
        console.log(pluginObject);
    }

    // -----end of cades-----

    // -----custom-----
    function getJasperSignatureCertificatesList() {

        let oStore;

        if (cadesplugin.CreateObjectAsync) {
            console.log("место 1");
            console.log(!!cadesplugin.CreateObjectAsync);
            cadesplugin.async_spawn(function* () {
                try {
                    console.log("значение oStore");
                    console.log(cadesplugin.CreateObjectAsync);
                    console.log(pluginObject);
                    oStore = yield cadesplugin.CreateObjectAsync("CAPICOM.Store");
                    console.log("значение oStore");
                    console.log(oStore);
                } catch (e) {
                    let err = cadesplugin.getLastError(e);
                    console.log("Текст ошибки");
                    console.log(err);
                    if (err.indexOf("0x80090019") + 1) {
                        showError("Указанный CSP не установлен");
                        return;
                    } else {
                        showError("Невозможно загрузить хранилище сертификатов!");
                        return;
                    }
                }

                try {
                    yield oStore.Open(cadesplugin.CAPICOM_CURRENT_USER_STORE, cadesplugin.CAPICOM_MY_STORE,
                        cadesplugin.CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED);
                } catch (e) {
                    showError("Ошибка при открытии хранилища: " + GetErrorMessage(e));
                    return;
                }

                const oCerts = yield oStore.Certificates;
                const certCnt = yield oCerts.Count;
                let Adjust = new CertificateAdjuster();

                if (certificatesList.length > 0) certificatesList = [];

                let certx;
                for (let i = 1; i <= certCnt; i++) {
                    try {
                        // eslint-disable-next-line no-unused-vars
                        certx = yield oCerts.Item(i);
                    } catch (e) {
                        showError("Ошибка при перечислении сертификатов: " + GetErrorMessage(e));
                        return;
                    }
                    let temp = {};
                    try {
                        let ValidToDate = new Date((yield certx.ValidToDate));
                        let ValidFromDate = new Date((yield certx.ValidFromDate));
                        let Validator;
                        let IsValid = false;
                        //если попадется сертификат с неизвестным алгоритмом
                        //тут будет исключение. В таком сертификате просто пропускаем такое поле
                        try {
                            Validator = yield certx.IsValid();
                            IsValid = yield Validator.Result;
                            // eslint-disable-next-line no-empty
                        } catch (e) {

                        }
                        temp.signatureData = {};
                        temp.subject = "Владелец: <b>" + Adjust.GetCertName(yield certx.SubjectName) + "<b>";
                        temp.signatureData.subject = Adjust.GetCertName(yield certx.SubjectName);

                        temp.issuer = "Издатель: <b>" + Adjust.GetIssuer(yield certx.IssuerName) + "<b>";
                        temp.from = "Выдан: <b>" + Adjust.GetCertDate(ValidFromDate) + "<b>";
                        temp.signatureData.from = Adjust.GetCertDate(ValidFromDate);
                        temp.validFrom = "Действителен до: <b>" + Adjust.GetCertDate(ValidToDate) + "<b>";
                        temp.signatureData.validDue = Adjust.GetCertDate(ValidToDate);
                        let pubKey = yield certx.PublicKey();
                        let algo = yield pubKey.Algorithm;
                        let fAlgoName = yield algo.FriendlyName;

                        temp.pubKey = pubKey;
                        temp.algo = algo;
                        temp.fAlgoName = fAlgoName;

                        temp.algorithm = "Алгоритм ключа: <b>" + fAlgoName + "<b>";

                        let hasPrivateKey = yield certx.HasPrivateKey();
                        let Now = new Date();

                        if (hasPrivateKey) {
                            let oPrivateKey = yield certx.PrivateKey;
                            let sProviderName = yield oPrivateKey.ProviderName;
                            temp.provname = "Криптопровайдер: <b>" + sProviderName + "<b>";
                            try {
                                let sPrivateKeyLink = yield oPrivateKey.UniqueContainerName;
                                temp.privateKeyLink = "Ссылка на закрытый ключ: <b> " + sPrivateKeyLink + "<b>";
                            } catch (e) {
                                temp.privateKeyLink = "Ссылка на закрытый ключ: <b>" + e.message + "<b>";
                            }
                        } else {
                            temp.provname = "Криптопровайдер:";
                            temp.privateKeyLink = "Ссылка на закрытый ключ:";
                        }
                        if (Now < ValidFromDate) {
                            temp.status = "Статус: <span style=\"color:red; font-weight:bold; font-size:16px\">Срок действия не наступил</span>";
                        } else if (Now > ValidToDate) {
                            temp.status = "Статус: <span style=\"color:red; font-weight:bold; font-size:16px\">Срок действия истек</span>";
                        } else if (!hasPrivateKey) {
                            temp.status = "Статус: <span style=\"color:red; font-weight:bold; font-size:16px\">Нет привязки к закрытому ключу</span>";
                        } else if (!IsValid) {
                            temp.status = "Статус: <span style=\"color:red; font-weight:bold; font-size:16px\">Ошибка при проверке цепочки сертификатов. Возможно на компьютере не установлены сертификаты УЦ, выдавшего ваш сертификат</span>";
                        } else {
                            temp.status = "Статус: <span style=\"color:darkgreen; font-weight:bold; font-size:16px\">Действителен</span>";
                        }

                        temp.isValid = IsValid;

                        /*if(args[3])
                        {
                            document.getElementById(field_prefix + "location").innerHTML = "Установлен в хранилище: <b>Нет</b>";
                        } else {
                            document.getElementById(field_prefix + "location").innerHTML = "Установлен в хранилище: <b>Да</b>";
                        }*/

                    } catch (e) {
                        showError("Ошибка при получении свойств сертификата: " + GetErrorMessage(e));
                    }

                    try {
                        temp.thumbprint = yield certx.Thumbprint;
                        temp.signatureData.thumbprint = yield certx.Thumbprint;

                    } catch (e) {
                        showError("Ошибка при получении свойства Thumbprint: " + GetErrorMessage(e));
                    }
                    // eslint-disable-next-line no-prototype-builtins
                    if (temp.hasOwnProperty('thumbprint') && temp.hasOwnProperty('algo')) {
                        temp.description = temp.subject.replaceAll("CN=", '').replaceAll("<b>", "") + ', ' + temp.from.replaceAll("<b>", "");
                        certificatesList.push(temp);
                    }
                }
                let signSelector = document.getElementById("jasperSignatureSelect");
                let certificateSubject = document.getElementById("certificateSubject");
                let certificateIssuer = document.getElementById("certificateIssuer");
                let certificateFrom = document.getElementById("certificateFrom");
                let certificateValidFrom = document.getElementById("certificateValidFrom");
                let certificateFAlgoName = document.getElementById("certificateFAlgoName");
                let certificateProvname = document.getElementById("certificateProvname");
                let certificatePrivateKeyLink = document.getElementById("certificatePrivateKeyLink");
                let certificateStatus = document.getElementById("certificateStatus");
                let certificateSubmitButton = document.getElementById("certificateSubmitButton");
                let certificateInfoDiv = document.getElementById("certificateInfoDiv");
                signSelector.on('change', function () {
                    let value = signSelector.val();
                    if (value != null && typeof value != 'undefined' && value !== '') {
                        let payload = null;
                        let breakException = {};
                        try {
                            certificatesList.forEach(el => {
                                if (el.thumbprint === value) {
                                    payload = el;
                                    throw breakException;
                                }
                            })
                            // eslint-disable-next-line no-empty
                        } catch (e) {
                        }
                        if (payload) {
                            certificateSubject.html(payload.subject);
                            certificateIssuer.html(payload.issuer);
                            certificateFrom.html(payload.from);
                            certificateValidFrom.html(payload.validFrom);
                            certificateFAlgoName.html(payload.algorithm);
                            certificateProvname.html(payload.provname);
                            certificatePrivateKeyLink.html(payload.privateKeyLink);
                            certificateStatus.html(payload.status);
                            if (payload.isValid) certificateSubmitButton.show();
                            else certificateSubmitButton.hide();
                            certificateInfoDiv.show();
                            jasperDataToSign["params_handler_incoming_request_data"] = JSON.stringify(payload.signatureData);
                        } else {
                            certificateInfoDiv.hide();
                        }

                    } else {
                        certificateInfoDiv.hide();
                    }
                });
                signSelector.empty();
                if (certificatesList.length > 0) {
                    certificatesList.forEach(el => {
                        signSelector.append('<option>', {value: el.thumbprint, text: el.description});
                    })
                    let payload = certificatesList[0];
                    certificateSubject.html(payload.subject);
                    certificateIssuer.html(payload.issuer);
                    certificateFrom.html(payload.from);
                    certificateValidFrom.html(payload.validFrom);
                    certificateFAlgoName.html(payload.algorithm);
                    certificateProvname.html(payload.provname);
                    certificatePrivateKeyLink.html(payload.privateKeyLink);
                    certificateStatus.html(payload.status);
                    certificateInfoDiv.show();
                    jasperDataToSign["params_handler_incoming_request_data"] = JSON.stringify(payload.signatureData);
                } else {
                    certificateInfoDiv.hide();
                }

                yield oStore.Close();
                // MicroModal.show("jasperSignatureModal");
            });
        }
    }

    async function jasperSignContainerData(hashToSign, certificate) {
        let oStore;
        cadesplugin.async_spawn(function* () {
            try {
                oStore = yield cadesplugin.CreateObjectAsync("CAdESCOM.Store");
            } catch (e) {
                showError("Невозможно загрузить хранилище сертификатов! " + GetErrorMessage(e));
                return
            }

            try {
                yield oStore.Open(cadesplugin.CAPICOM_CURRENT_USER_STORE, cadesplugin.CAPICOM_MY_STORE,
                    cadesplugin.CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED);
            } catch (e) {
                showError("Ошибка при открытии хранилища: " + GetErrorMessage(e));
                return;
            }

            let oCerts
            try {
                let oAllCerts = yield oStore.Certificates;
                oCerts = yield oAllCerts.Find(cadesplugin.CAPICOM_CERTIFICATE_FIND_SHA1_HASH, certificate);
            } catch (e) {
                showError("Не удалось найти сертификат: " + GetErrorMessage(e));
                return;
            }

            if (yield oCerts.Count === 0) {
                showError("Сертификат для подписи не найден!");
                return;
            }

            const oCert = yield oCerts.Item(1);
            yield SignCreateAsync(oCert, hashToSign);
            yield oStore.Close();
        });
    }

    async function SignCreateAsync(oCert, dataToSign) {
        return new Promise(function () {
            cadesplugin.async_spawn(function* () {
                let oSigner = yield cadesplugin.CreateObjectAsync("CAdESCOM.CPSigner");
                yield oSigner.propset_Certificate(oCert);
                yield oSigner.propset_CheckCertificate(true);

                let oSignedData = yield cadesplugin.CreateObjectAsync("CAdESCOM.CadesSignedData");
                yield oSignedData.propset_ContentEncoding(cadesplugin.CADESCOM_BASE64_TO_BINARY);
                yield oSignedData.propset_Content(dataToSign);
                try {
                    jasperResultSignature = yield oSignedData.SignCades(oSigner, cadesplugin.CADESCOM_CADES_BES, true);
                } catch (e) {
                    showError("Failed to create signature. Error: " + GetErrorMessage(e));
                }
            });
        });
    }

    function GetErrorMessage(e) {
        let err = e.message;
        if (!err) {
            err = e;
        } else if (e.number) {
            err += " (" + e.number + ")";
        }
        return err;
    }


    function CertificateAdjuster() {
    }

    CertificateAdjuster.prototype.checkQuotes = function (str) {
        let result = 0, i = 0;
        for (i; i < str.length; i++) if (str[i] === '"')
            result++;
        return !(result % 2);
    }

    CertificateAdjuster.prototype.extract = function (from, what) {
        let certName = "";

        let begin = from.indexOf(what);

        if (begin >= 0) {
            let end = from.indexOf(', ', begin);
            while (end > 0) {
                if (this.checkQuotes(from.substr(begin, end - begin)))
                    break;
                end = from.indexOf(', ', end + 1);
            }
            certName = (end < 0) ? from.substr(begin) : from.substr(begin, end - begin);
        }

        return certName;
    }

    CertificateAdjuster.prototype.Print2Digit = function (digit) {
        return (digit < 10) ? "0" + digit : digit;
    }

    CertificateAdjuster.prototype.GetCertDate = function (paramDate) {
        let certDate = new Date(paramDate);
        return this.Print2Digit(certDate.getUTCDate()) + "." + this.Print2Digit(certDate.getUTCMonth() + 1) + "." + certDate.getFullYear() + " " +
            this.Print2Digit(certDate.getUTCHours()) + ":" + this.Print2Digit(certDate.getUTCMinutes()) + ":" + this.Print2Digit(certDate.getUTCSeconds());
    }

    CertificateAdjuster.prototype.GetCertName = function (certSubjectName) {
        return this.extract(certSubjectName, 'CN=');
    }

    CertificateAdjuster.prototype.GetIssuer = function (certIssuerName) {
        return this.extract(certIssuerName, 'CN=');
    }

    CertificateAdjuster.prototype.GetCertInfoString = function (certSubjectName, certFromDate) {
        return this.extract(certSubjectName, 'CN=') + "; Выдан: " + this.GetCertDate(certFromDate);
    }

    // Вывод сведений о КриптоПро и плагине CAdES
    function CheckForPlugIn_AsyncJasperSignature() {
        console.log("Запуск проверки КриптоПро и плагина");
        window.onload = function () {
            document.getElementById('PluginEnabledImg').setAttribute("src", "./green_dot.png");
            document.getElementById('PlugInEnabledTxt').innerHTML = "Плагин загружен";
            document.getElementById('CspEnabledImg').setAttribute("src", "./yellow_dot.png");
            document.getElementById('CspEnabledTxt').innerHTML = "КриптоПро CSP не загружен";
        }
        document.getElementById('PluginEnabledImg').setAttribute("src", "./green_dot.png");
        document.getElementById('PlugInEnabledTxt').innerHTML = "Плагин загружен";
        document.getElementById('CspEnabledImg').setAttribute("src", "./yellow_dot.png");
        document.getElementById('CspEnabledTxt').innerHTML = "КриптоПро CSP не загружен";

        cadesplugin.async_spawn(function* () {
            console.log("Содежимое cadesplugin");
            console.log(cadesplugin);
            let oAbout = yield cadesplugin.CreateObjectAsync("CAdESCOM.About");
            let CurrentPluginVersion = yield oAbout.PluginVersion;
            document.getElementById('PlugInVersionTxt').innerHTML = "Версия плагина: " + (yield CurrentPluginVersion.toString());

            let ver = yield oAbout.CSPVersion("", 80);
            let ret = (yield ver.MajorVersion) + "." + (yield ver.MinorVersion) + "." + (yield ver.BuildVersion);
            document.getElementById('CSPVersionTxt').innerHTML = "Версия криптопровайдера: " + ret;
            try {
                let sCSPName = yield oAbout.CSPName(80);
                document.getElementById('CspEnabledImg').setAttribute("src", "/o/jasper_internal/img/green_dot.png");
                document.getElementById('CspEnabledTxt').innerHTML = "Криптопровайдер загружен";
                document.getElementById('CSPNameTxt').innerHTML = "Криптопровайдер: " + sCSPName;
                // eslint-disable-next-line no-empty
            } catch (err) {
            }
        });


    }
    // ----- end of custom -----

    // -----internal jasper-----
    let jasperDataToSign = null;
    let certificatesList = [];
    let jasperResultSignature = null;


    async function InternalJasperSignatureSign() {
        // let appData = actionPayload.appData;
        //
        // let payload = {};
        // payload["params_handler_model"] = appData.modelId;
        // payload["params_handler_form_id"] = appData.formId;
        // payload["params_handler_data"] = appData.formData;
        // payload["params_handler_application"] = appData.appId;
        // payload["params_handler_action"] = actionPayload.endpoint;
        // payload["camunda_session_id"] = camunda_session_id;
        // jasperDataToSign = payload;
        console.log("jasperDataToSign");
        console.log(jasperDataToSign);
        CheckForPlugIn_AsyncJasperSignature();
        getJasperSignatureCertificatesList();
    }

    // eslint-disable-next-line no-unused-vars
    async function getSignedData(readyCallback) {
        // await getAuth();
        let response = await axios.post("/o/handler/invokeAJAX", jasperDataToSign, {headers: {'Content-Type': 'application/json; charset=UTF-8'}})
        // eslint-disable-next-line no-prototype-builtins
        if (response.data.hasOwnProperty('error')) {
            showError(response.data.error);
            console.debug("Error while printing report");
        } else {
            // eslint-disable-next-line no-prototype-builtins
            if (response.data.hasOwnProperty('hashToSign')) {
                await jasperSignContainerData(response.data.hashToSign, JSON.parse(jasperDataToSign.params_handler_incoming_request_data).thumbprint);
                await jasperSignatureTimes();
                if (jasperResultSignature) {
                    let JSONObject = {};
                    JSONObject.hashToSign = response.data.hashToSign;
                    JSONObject.signature = jasperResultSignature;
                    JSONObject.fileName = response.data.fileName;
                    // JSONObject.app_id = $('#' + camundaNameSpace + 'app_id').val();

                    let finalResponse = await axios.post("/o/jasper/fillJasperSignatureData", JSONObject, {headers: {'Content-Type': 'application/json; charset=UTF-8'}})
                    // eslint-disable-next-line no-prototype-builtins
                    if (finalResponse.data.hasOwnProperty('error')) {
                        showError(finalResponse.data.error);
                    } else {
                        // eslint-disable-next-line no-undef
                        download("data:application/octet-stream;base64," + finalResponse.data.signedFile, response.data.fileName, "application/octet-stream");
                        if (typeof readyCallback === 'function') {
                            readyCallback();
                        }
                    }
                } else {
                    showError('Ошибка при формировании подписи!')
                    console.debug("unable to create signature");
                }
            } else {
                showError('Ошибка при формировании подписи!');
            }

        }
    }

    async function jasperSignatureTimes() {
        for (let i = 0; i < 30; i++) {
            if (jasperResultSignature) break;
            await timer(500);
        }
    }

    const timer = ms => new Promise(res => setTimeout(res, ms))
// -----end of internal jasper-----

    function showError(err) {
        console.log(err);
    }


    initCades ();
    InternalJasperSignatureSign();
    // getSignedData();
}

