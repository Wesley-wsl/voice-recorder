const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

require("electron-reload")(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`),
});

function createWindow() {
    const win = new BrowserWindow({
        width: 500,
        height: 300,
        backgroundColor: "#234",
        resizable: false,
        icon: path.join(__dirname, "assets/icons/icon1.png"),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });
    win.loadFile("./src/index.html");

    const menuTemplate = [
        {
            label: app.name,
            submenu: [
                { label: "Preferences", click: () => {} },
                {
                    label: "Open destination folder",
                    click: () => {},
                },
            ],
        },
        {
            label: "window",
            submenu: [
                {
                    role: "quit",
                },
            ],
        },
    ];
    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
    createWindow();
});
