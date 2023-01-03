async function getLinks() {
	const linksUl = document.getElementById("links");
	 const data = await fetch(`${window.location.protocol}//${window.location.host}/links.json`);
	 const links = await data.json()

		 for await (const el of links){
			 linksUl.innerHTML += `<li><a href="${el.link}">${el.desc}</a></li>`
		 }
	 }
 

export default getLinks;
