const d = document;
const n = navigator;
const ua = n.userAgent;

export default function userDeviceInfo(div) {
    const $div = d.getElementById(div);
    const isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windows phone/i),
        any: function () {
            return this.android() || this.ios() || this.windows();
        }
    };
    const isDesktop = {
        linux: () => ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function () {
            return this.linux() || this.mac() || this.windows();
        }
    };
    const isBrowser = {
        chrome: () => ua.match(/chrome/i),
        safari: () => ua.match(/safari/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera|opera mini/i),
        ie: () => ua.match(/msie|iemobile/i),
        edge: () => ua.match(/edg/i),
        any: function () {
            return (
                this.ie() ||
                this.edge() ||
                this.chrome() ||
                this.safari() ||
                this.firefox() ||
                this.opera()
            );
        }
    };
    $div.innerHTML = `<ul>
            <li>User Agent:<b>${ua}</b></li>
            <li>Plataforma:<b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
            <li>Navegador:<b>${isBrowser.any()}</b></li>
            <p>Esto es contenido exclusivo de ${isBrowser.any()}</p>
            </ul>`;
}
