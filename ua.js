document.addEventListener("DOMContentLoaded", function() {
    var userAgent = navigator.userAgent.toLowerCase();
    var body = document.body;
    var browserName = "Desconocido";
    var iconElement = document.querySelector(".icon-nav");
    var isChrome = false;
    var isFirefox = false;
    var isSafari = false;
    var isAlt = false;
    var isPhone = false;

    var language = navigator.language || navigator.userLanguage;
    var translations = {
        "es": {
            "pageTitle": "Detector de Navegador",
            "name": "Navegador: ",
            "detect": "Navegador detectado: ",
            "version": "Versión del navegador: ",
            "operatingSystem": "Sistema operativo: ",
            "architecture": "Arquitectura: ",
            "language": "Idioma: ",
            "userAgent": "User Agent: ",
            "unknown": "Desconocido",
            "platformType": "Tipo de plataforma: ",
            "pc": "PC",
            "mobile": "Móvil",
            "yes": "Sí",
            "no": "No",
            "creator": "Página creada por MasterJayanX"
        },
        "en": {
            "pageTitle": "Browser Detector",
            "name": "Browser: ",
            "detect": "Detected browser: ",
            "version": "Browser version: ",
            "operatingSystem": "Operating System: ",
            "architecture": "Architecture: ",
            "language": "Language: ",
            "userAgent": "User Agent: ",
            "unknown": "Unknown",
            "platformType": "Platform type: ",
            "pc": "PC",
            "mobile": "Mobile",
            "yes": "Yes",
            "no": "No",
            "creator": "Page created by MasterJayanX"
        },
        "fr": {
            "pageTitle": "Détecteur de navigateur",
            "name": "Navigateur: ",
            "detect": "Navigateur détecté: ",
            "version": "Version du navigateur: ",
            "operatingSystem": "Système d'exploitation: ",
            "architecture": "Architecture: ",
            "language": "Langue: ",
            "userAgent": "User Agent: ",
            "unknown": "Inconnu",
            "platformType": "Type de plateforme: ",
            "pc": "Ordinateur",
            "mobile": "Mobile",
            "yes": "Oui",
            "no": "Non",
            "creator": "Page créée par MasterJayanX"
        }
    };
    var lang = translations[language.split('-')[0]] || translations["es"];
    var pageTitle = document.getElementById("top");
    if (pageTitle) {
        pageTitle.textContent = lang.pageTitle;
    }

    if (userAgent.includes("firefox")) {
        isFirefox = true;
        body.classList.add("firefox");
        browserName = "Firefox";
        if(userAgent.includes("palemoon")) {
            browserName = "Pale Moon";
            isFirefox = false;
            isAlt = true;
        }
        else if(userAgent.includes("k-meleon")) {
            browserName = "K-Meleon";
            isFirefox = false;
            isAlt = true;
        }
        else if(userAgent.includes("mypal")) {
            browserName = "MyPal";
            isFirefox = false;
            isAlt = true;
        }
        if (iconElement){
            iconElement.className = "fab fa-firefox-browser";
        }
    } else if (userAgent.includes("chrome")) {
        isChrome = true;
        body.classList.add("chrome");
        browserName = "Chrome";
        if(userAgent.includes("opr")) {
            browserName = "Opera";
            isChrome = false;
            isAlt = true;
            if (iconElement){
                iconElement.className = "fab fa-opera";
            }
        }
        else if(userAgent.includes("edge")) {
            browserName = "Edge";
            isChrome = false;
            isAlt = true;
            if (iconElement){
                iconElement.className = "fab fa-edge";
            }
        }
        if (iconElement && isChrome){
            iconElement.className = "fab fa-chrome";
        }
    } else if (userAgent.includes("safari") && !userAgent.includes("chrome")) {
        body.classList.add("safari");
        browserName = "Safari";
        if (iconElement){
            iconElement.className = "fab fa-safari";
        }
        isSafari = true;
    } else if (userAgent.includes("edge")) {
        body.classList.add("edge");
        browserName = "Edge";
        if (iconElement){
            iconElement.className = "fab fa-edge";
        }
    }

    var isIcon = document.querySelector(".icon-nav");
    var browserInfoElement = document.getElementById("browser-info");
    var browserInTitle = document.querySelector("title");
    if (browserInTitle) {
        browserInTitle.textContent = lang.detect + browserName;
    }
    if (browserInfoElement) {
        browserInfoElement.textContent = lang.name + browserName;
    }

    var browserVersionElement = document.getElementById("browser-version");
    if (browserVersionElement) {
        var versionNumber = navigator.userAgent.match(/(chrome|firefox|safari|edge)\/([\d.]+)/i);
        var browserVersion = versionNumber ? versionNumber[2] : "Desconocido";
        if(isAlt) {
            browserVersion = navigator.userAgent.match(/(opr|palemoon|edge|k-meleon|mypal)\/([\d.]+)/i)[2];
        }
        if(isSafari && userAgent.includes("version")) {
            browserVersion = userAgent.match(/version\/([\d.]+)/i)[1];
        }
        browserVersionElement.textContent = lang.version + browserVersion;
    }

    var operatingSystemElement = document.getElementById("operating-system");
    if (operatingSystemElement) {
        if (userAgent.includes("windows")) {
            var operatingSystem = "Windows";
            if(userAgent.includes("windows nt 10.0")) {
                operatingSystem += " 10";
            } else if(userAgent.includes("windows nt 6.3")) {
                operatingSystem += " 8.1";
            }
            else if(userAgent.includes("windows nt 6.2")) {
                operatingSystem += " 8";
            }
            else if(userAgent.includes("windows nt 6.1")) {
                operatingSystem += " 7";
            }
            else if(userAgent.includes("windows nt 6.0")) {
                operatingSystem += " Vista";
            }
            else if(userAgent.includes("windows nt 5.2")) {
                operatingSystem += " Server 2003";
            }
            else if(userAgent.includes("windows nt 5.1")) {
                operatingSystem += " XP";
            }
            else if(userAgent.includes("windows nt 5.0")) {
                operatingSystem += " 2000";
            }
        }
        else if (userAgent.includes("linux")) {
            var operatingSystem = "Linux";
            if(userAgent.includes("ubuntu")) {
                operatingSystem += " (Ubuntu)";
            }
            else if(userAgent.includes("debian")) {
                operatingSystem += " (Debian)";
            }
            else if(userAgent.includes("fedora")) {
                operatingSystem += " (Fedora)";
            }
            else if(userAgent.includes("arch")) {
                operatingSystem += " (Arch)";
            }
            else if(userAgent.includes("android")){
                operatingSystem = "Android";
                var androidVersionMatch = userAgent.match(/android (\d+.\d+)/);
                var androidVersionMatch2 = userAgent.match(/android (\d+)/);
                if (androidVersionMatch && androidVersionMatch[1]) {
                    operatingSystem += " " + androidVersionMatch[1];
                }
                else if (androidVersionMatch2 && androidVersionMatch2[1]) {
                    operatingSystem += " " + androidVersionMatch2[1];
                }
                if(userAgent.includes("mobile")) {
                    isPhone = true;
                }
            }
        }
        else if (userAgent.includes("mac")) {
            var operatingSystem = "MacOS";
            if(userAgent.includes("mac os x 14")) {
                operatingSystem += " Sonoma";
            }
            else if(userAgent.includes("mac os x 13")) {
                operatingSystem += " Ventura";
            }
            else if(userAgent.includes("mac os x 12")) {
                operatingSystem += " Monterey";
            }
            else if(userAgent.includes("mac os x 11")) {
                operatingSystem += " Big Sur";
            }
            else if(userAgent.includes("mac os x 10_15")) {
                operatingSystem += " Catalina";
            }
            else if(userAgent.includes("mac os x 10_14")) {
                operatingSystem += " Mojave";
            }
            else if(userAgent.includes("iphone")) {
                operatingSystem = "iOS";
                var iOSVersionMatch = userAgent.match(/os (\d+_\d+)/);
                if (iOSVersionMatch && iOSVersionMatch[1]) {
                    operatingSystem += " " + iOSVersionMatch[1].replace("_", ".");
                }
                isPhone = true;
            }
            else if(userAgent.includes("ipad")) {
                operatingSystem = "iPadOS";
                var iPadOSVersionMatch = userAgent.match(/os (\d+_\d+)/);
                if (iPadOSVersionMatch && iPadOSVersionMatch[1]) {
                    operatingSystem += " " + iPadOSVersionMatch[1].replace("_", ".");
                }
                isPhone = true;
            }
        }
        else if(userAgent.includes("cros")) {
            var operatingSystem = "Chrome OS";
        }
        else {
            var operatingSystem = lang.unknown;
        }
        operatingSystemElement.textContent = lang.operatingSystem + operatingSystem;
    }

    var userAgentElement = document.getElementById("user-agent");
    if (userAgentElement) {
        userAgentElement.textContent = lang.userAgent + navigator.userAgent;
    }
    if (userAgent.includes("x64") || userAgent.includes("win64") || userAgent.includes("x86_64") || userAgent.includes("wow64")) {
        var architecture = "64 bits";
    }
    else if (userAgent.includes("x86") || userAgent.includes("win32")) {
        var architecture = "32 bits";
    }
    else if (userAgent.includes("arm") || userAgent.includes("pixel") || userAgent.includes("sm") || userAgent.includes("nexus") || isPhone) {
        var architecture = "ARM";
    }
    else {
        var architecture = lang.unknown;
    }

    var architectureElement = document.getElementById("architecture");
    if (architectureElement) {
        architectureElement.textContent = lang.architecture + architecture;
    }

    var languageElement = document.getElementById("language");
    if (languageElement) {
        languageElement.textContent = lang.language + navigator.language;
    }

    var creatorElement = document.getElementById("creator");
    if (creatorElement) {
        creatorElement.textContent = lang.creator;
    }

    var platformType = document.getElementById("platform-type");
    if (platformType) {
        if (userAgent.includes("win")) {
            platformType.textContent = lang.platformType + lang.pc;
        }
        else if (userAgent.includes("android") && userAgent.includes("mobile")) {
            platformType.textContent = lang.platformType + lang.mobile;
        }
        else if (userAgent.includes("iphone")) {
            platformType.textContent = lang.platformType + lang.mobile;
        }
        else if (userAgent.includes("ipad")) {
            platformType.textContent = lang.platformType + lang.mobile;
        }
        else if (userAgent.includes("mac")) {
            platformType.textContent = lang.platformType + lang.pc;
        }
        else if (userAgent.includes("linux")) {
            platformType.textContent = lang.platformType + lang.pc;
        }
        else {
            platformType.textContent = lang.platformType + lang.unknown;
        }
    }

    var hasTouch = "ontouchstart" in window;
    if (hasTouch) {
        var touch = lang.yes;
    }
    else {
        var touch = lang.no;
    }
    var touchElement = document.getElementById("touch");
    if (touchElement) {
        touchElement.textContent = "Touch: " + touch;
    }
});