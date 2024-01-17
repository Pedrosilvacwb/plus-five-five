"use strict";
exports.__esModule = true;
var google_1 = require("next/font/google");
require("./globals.css");
var inter = google_1.Inter({ subsets: ["latin"] });
exports.metadata = {
    title: "+55 Coffe Shop",
    description: "High quality Brazilian Coffee"
};
function RootLayout(_a) {
    var children = _a.children;
    return (<html lang="en">
      <body className={inter.className}>{children}</body>
    </html>);
}
exports["default"] = RootLayout;
