document.getElementById("grids").style.backgroundColor = "black";
document.querySelector('.carousel-player-inner').style.backgroundColor = 'black';
document.getElementById("menubar").style.backgroundColor = "black";
document.querySelector('.top').style.backgroundColor = 'black';
document.getElementById("menubar-vm").style.backgroundColor = "black";
document.getElementById("grid-tabs-sticky").style.backgroundColor = "black";

var tabTitles = document.querySelectorAll('.tab-title');
tabTitles.forEach(function(element) {
    element.style.color = 'red';
});

var itemLinks = document.querySelectorAll('a.item-link.also-link');
itemLinks.forEach(function(element) {
    element.style.color = 'red';
});


var favTrackLinks = document.querySelectorAll('div.collection-item-fav-track.can-choose-track label span a');
favTrackLinks.forEach(function(element) {
    element.style.color = 'red';
});

var favTrackLinks = document.querySelectorAll('.collection-item-why > div > a');
favTrackLinks.forEach(function(element) {
    element.style.color = 'red';
});
var favTrackLinks = document.querySelectorAll('.collection-item-why > div > a');
favTrackLinks.forEach(function(element) {
    element.style.color = 'red';
});

var queueDivs = document.querySelectorAll('div.queue.show');
queueDivs.forEach(function(element) {
    element.style.backgroundColor = 'black';
    element.style.color = 'red';
});

var liElements = document.querySelectorAll('li[tabindex="0"][data-bind^="css"][class="active"]');
liElements.forEach(function(element) {
    element.style.backgroundColor = 'black';
});

var liElements = document.querySelectorAll('li[tabindex="0"][data-bind*="css"][class*="active"]');
liElements.forEach(function(element) {
    element.style.backgroundColor = 'black';
});

var titleElement = document.querySelector("#carousel-player > div.carousel-player-inner > div.col.col-4-15.now-playing > div > a > div.title");
if (titleElement) {
    titleElement.style.color = 'red';
} else {
    console.error('Element not found');
}

var artistElement = document.querySelector("#carousel-player > div.carousel-player-inner > div.col.col-4-15.now-playing > div > a > div.artist");
if (artistElement) {
    artistElement.style.color = 'red';
} else {
    console.error('Element not found');
}

var purchasedMsgElement = document.querySelector("#carousel-player > div.carousel-player-inner > div.col.col-4-15.now-playing > div > div > span.purchased-msg.collection-btn > a > span.txt");
if (purchasedMsgElement) {
    purchasedMsgElement.style.color = 'red';
} else {
    console.error('Element not found');
}

var giftMsgElement = document.querySelector("#carousel-player > div.carousel-player-inner > div.col.col-4-15.now-playing > div > div > span.gift-msg.collection-btn > a > span");
if (giftMsgElement) {
    giftMsgElement.style.color = 'red';
} else {
    console.error('Element not found');
}

var titleElement = document.querySelector("#carousel-player > div.carousel-player-inner > div.col.col-7-15.progress-transport > div.info-progress > div.info > div.title > a");
if (titleElement) {
    titleElement.style.color = 'red';
} else {
    console.error('Element not found');
}

// Select and style the element with data-bind="text: positionStr"
var positionElement = document.querySelector('span[data-bind="text: positionStr"]');
if (positionElement) {
    positionElement.style.color = 'red';
} else {
    console.error('Element with data-bind="text: positionStr" not found');
}

// Select and style the element with data-bind="text: durationStr"
var durationElement = document.querySelector('span[data-bind="text: durationStr"]');
if (durationElement) {
    durationElement.style.color = 'red';
} else {
    console.error('Element with data-bind="text: durationStr" not found');
}

// Select the div with ID "pgBd" and set its background color to black
var pgBdElement = document.getElementById("pgBd");
if (pgBdElement) {
    pgBdElement.style.backgroundColor = "black";
} else {
    console.error('Element with ID "pgBd" not found');
}
