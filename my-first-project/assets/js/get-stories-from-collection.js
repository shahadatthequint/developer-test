var sketches_host = 'https://thequint-web.staging.quintype.io'; //change to 'https://www.thequint.com' on production
var collection_slug = 'bol'; //change to the actual collection slug
var noOfFirstCarouselStories = 3;
var noOfThirdCarouselStories = 3;
var imageHost = "http://qt-staging-01.imgix.net"; //For Staging
// var imageHost = "http://quintype-01.imgix.net"; //For production

$(document).ready(function() {
  $.getJSON('https://thequint-web.staging.quintype.io/api/v1/collections/bol', function(res) {
    var stories = res.items.filter(function(item) { return item.type == 'story'})
                           .map(function(item) { return item.story });
    $('#first-story').append(firstStoryMarkup(stories[0]));
    $('#second-story').append(secondStoryMarkup(stories[1]));
    $('#first-carousel').append(firstCarouselMarkup(stories.slice(2, 2+noOfFirstCarouselStories)));
    $('#second-carousel').append(secondCarouselMarkup(stories.slice(noOfFirstCarouselStories+2, noOfFirstCarouselStories+5)));
    $('#third-carousel').append(thirdCarouselMarkup(stories.slice(noOfFirstCarouselStories+5, noOfFirstCarouselStories+noOfThirdCarouselStories+5)));
    $('#third-story').append(thirdStoryMarkup(stories[noOfFirstCarouselStories+noOfThirdCarouselStories+5]));
    $('#fourth-story').append(fourthStoryMarkup(stories[noOfFirstCarouselStories+noOfThirdCarouselStories+6]));
  })
})

var firstStoryMarkup = function(story) {
  return `<figure><a href=${story.slug}><div class="story-image"><img src=${imageSource(story['hero-image-s3-key'])} alt=${story['hero-image-caption']}></div><figcaption>${story.headline}</figcaption></a></figure>`
}

var secondStoryMarkup = function(story) {
  return `<figure><a href=${story.slug}><div class="story-image"><img src=${imageSource(story['hero-image-s3-key'])} alt=${story['hero-image-caption']}><figcaption>${story.headline} </figcaption></div></a></figure>`
}

var firstCarouselMarkup = function(stories) {
  var elements = stories.map(function(story) {
    return `<li><figure><a href=${story.slug}><div class="slider-img"><img src=${imageSource(story['hero-image-s3-key'])} alt=${story['hero-image-caption']}></div><figcaption>${story.headline}</figcaption></a></figure></li>`
  });
  return elements.join('')
}

var secondCarouselMarkup = function(stories) {
  var elements = stories.map(function(story) {
    return `<div class="gallery-img"><figure><img src=${imageSource(story['hero-image-s3-key'])} alt=${story['hero-image-caption']}><figcaption>${story.headline}</figcaption></figure></div>`
  });
  return elements.join('')
}

var thirdCarouselMarkup = function(stories) {
  var elements = stories.map(function(story) {
    return `<li><figure><a href=${story.slug}><div class="slider-img"><img src=${imageSource(story['hero-image-s3-key'])} alt=${story['hero-image-caption']}></div><figcaption>${story.headline}</figcaption></a></figure></li>`
  });
  return elements.join('')
}

var thirdStoryMarkup = function(story) {
  return `<figure><a href=${story.slug}><div class="story-image"><img src=${imageSource(story['hero-image-s3-key'])} alt=${story['hero-image-caption']}></div><figcaption><img class="ops" src="assets/images/caption-bg.png" alt=""><div class="caption-text">${story.headline}</div></figcaption></a></figure>`
}

var fourthStoryMarkup = function(story) {
  return `<figure><a href=${story.slug}><div class="story-image"><img src=${imageSource(story['hero-image-s3-key'])} alt=${story['hero-image-caption']}></div><figcaption>${story.headline}</figcaption></a></figure>`
}

var imageSource = function(s3key, width, height) {
  return `${imageHost}/${s3key}?auto=format&amp;q=60&amp;w=${width || 600}&amp;${height ? 'h='+height : ''}&amp;fm=pjpg`
}

// img src="http://images.assettype.com/' + story['hero-image-s3-key'] + '?auto=format&amp;rect=0,0,2348,1321&amp;q=35&amp;w=270&amp;fm=pjpg"