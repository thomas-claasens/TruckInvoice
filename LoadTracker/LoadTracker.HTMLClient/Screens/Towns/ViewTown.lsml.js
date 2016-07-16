/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewTown.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Town.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Town." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

