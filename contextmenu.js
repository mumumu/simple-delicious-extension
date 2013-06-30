chrome.contextMenus.create(
    {
        "title": chrome.i18n.getMessage("save_this_page_to_delicious"),
        "type": "normal",
        "contexts": ["all"],
        "onclick": function(info, tab) {
           chrome.tabs.executeScript(
               null,
               {file: "content_script.js"}
           );
        }
    }
);
