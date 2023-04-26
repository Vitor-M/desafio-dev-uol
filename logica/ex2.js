fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {
        const randomPhoto = data[Math.floor(Math.random() * data.length)];

        const sameAlbumPhotos = data.filter(photo => photo.albumId === randomPhoto.albumId);

        console.log(sameAlbumPhotos);

    })
    .catch(error => console.error(error));