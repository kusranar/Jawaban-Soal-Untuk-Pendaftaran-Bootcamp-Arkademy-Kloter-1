function biodata(){
	var data = {
			"nama" : "Rizki Kusrana",
			"address" : "Jl. Villa Santika RT 03/04 Mampang Pancoran Mas Kota Depok 16433",
			"hobbies" : ["Travelling", "Playing Game"],
			"is_married" : false,
			"schools" : {"highSchools" : "SMK Nasional, Jurusan Teknik Komputer Jaringan", "university" : "Universitas Gunadarma, Program Studi Teknik Komputer"},
			"skills" : [
						{"Skill1" : "HTML, CSS, SQL", 
							"Level" : "Beginner", 
							"Deskripsi" : "Pernah membuat portofolio website menggunakan HTML, CSS, dan framework yang ada." },
						{"Skill2" : "JavaScript, PHP, Python",
							"Level" : "Beginner",
							"Deskripsi" : "Mengetahui Syntax-syntax dasar bahasa pemrograman tersebut"}
						]
	};

	return JSON.stringify(data);
}

console.log(biodata());