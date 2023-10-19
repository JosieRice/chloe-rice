import { ContentfulLivePreview } from "@contentful/live-preview";

ContentfulLivePreview.init({ debugMode: true, enableLiveUpdates: true, locale: "en-US" });
ContentfulLivePreview.subscribe("save", {
    callback: () => {
        window.location.reload();
    },
});
