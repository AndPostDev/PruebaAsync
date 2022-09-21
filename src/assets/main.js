// La API proporcionada es de youtube pero nos la gestiona RapidAPI
// https://rapidapi.com/
const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC9k0tTsh_qStx0HPuPftSsg&filter=uploads_latest&hl=en&gl=US'

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0d4ac39209msh159f52b4924b6e9p18c59fjsndd437b050085',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = response.json();
    return data
}
 
(async () => {
    try {
        const videos = await fetchData(API);
        console.log(videos.contents[0].video.thumbnails[0].url)
        let view = 
        `
        ${videos.contents.map(item => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${item.video.thumbnails[0].url}" alt="${item.video.title}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                        ${item.video.title}
                    </h3>
                </div>
            </div>
        `).slice(0,4).join('')}
            
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error)
    }

})();