# HTML Media Elements (Basic to Advanced)

## 1. Basic Media Elements

### 1.1 Image (`<img>`)
Displays images in web pages.
```html
<img src="image.jpg" alt="A beautiful scenery" width="300">
```
- `src`: Image source URL
- `alt`: Alternative text for accessibility
- `width` & `height`: Adjust dimensions

### 1.2 Audio (`<audio>`)
Embeds audio files.
```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support the audio tag.
</audio>
```
- `controls`: Adds play/pause buttons
- `source`: Multiple file formats for compatibility

### 1.3 Video (`<video>`)
Embeds video files.
```html
<video controls width="400">
    <source src="video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```
- `controls`: Adds playback buttons
- `autoplay`: Plays automatically
- `loop`: Repeats the video

---

## 2. Advanced Media Features

### 2.1 Lazy Loading (`<img loading="lazy">`)
Delays image loading until needed.
```html
<img src="large-image.jpg" alt="Lazy loaded image" loading="lazy">
```

### 2.2 Responsive Images (`<picture>`)
Loads different images for different devices.
```html
<picture>
    <source srcset="small.jpg" media="(max-width: 600px)">
    <source srcset="large.jpg" media="(min-width: 601px)">
    <img src="default.jpg" alt="Responsive Image">
</picture>
```

