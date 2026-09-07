/**
 * Google Apps Script for 1-Click Publishing to Vercel / Cloudflare Pages
 * 
 * Instructions:
 * 1. Open your Google Sheet
 * 2. Go to Extensions -> Apps Script
 * 3. Replace the contents of Code.gs with this file
 * 4. Put your Vercel or Cloudflare Deploy Hook URL in DEPLOY_HOOK_URL below
 * 5. Reload your Google Sheet to see the new "🚀 Website" menu!
 */

const DEPLOY_HOOK_URL = "https://api.vercel.com/v1/integrations/deploy/YOUR_HOOK_ID";

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("🚀 Website")
    .addItem("Publish Changes to Live Site", "deployWebsite")
    .addToUi();
}

function deployWebsite() {
  const ui = SpreadsheetApp.getUi();
  
  if (DEPLOY_HOOK_URL.includes("YOUR_HOOK_ID")) {
    ui.alert(
      "Configuration Needed", 
      "Please set your actual Vercel / Cloudflare Deploy Hook URL in Apps Script before publishing.", 
      ui.ButtonSet.OK
    );
    return;
  }

  const response = ui.alert(
    "Confirm Deployment",
    "Do you want to publish all latest Google Sheet changes to your live website?",
    ui.ButtonSet.YES_NO
  );

  if (response === ui.Button.YES) {
    try {
      SpreadsheetApp.getActiveSpreadsheet().toast("Triggering build on Vercel...", "Publishing", 5);
      
      const res = UrlFetchApp.fetch(DEPLOY_HOOK_URL, {
        method: "POST",
        muteHttpExceptions: true
      });

      if (res.getResponseCode() === 200 || res.getResponseCode() === 201) {
        ui.alert("Success", "🚀 Deployment triggered! Your changes will be live in 1-2 minutes.", ui.ButtonSet.OK);
      } else {
        ui.alert("Deployment Warning", "Received response: " + res.getContentText(), ui.ButtonSet.OK);
      }
    } catch (err) {
      ui.alert("Error", "Failed to trigger deploy: " + err.toString(), ui.ButtonSet.OK);
    }
  }
}
