exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('pictures').del().then(function(){
		// Inserts seed entries
		return knex('pictures').insert([
			{ picture: 'https://i.ibb.co/gWM3x2J/adult-beauty-blonde-973403.jpg', user_id: 1 },
			{ picture: 'https://i.ibb.co/VgnL1Sm/colors-hairdresser-cutting-colorimetry-159780.jpg', user_id: 2 },
			{ picture: 'https://i.ibb.co/FmM1YNT/pexels-photo-112782.jpg', user_id: 3 },
			{ picture: 'https://i.ibb.co/bHqc0zW/pexels-photo-219550.jpg', user_id: 3 },
			{ picture: 'https://i.ibb.co/zftmHp9/pexels-photo-247123.jpg', user_id: 2 },
			{ picture: 'https://i.ibb.co/mB9P9jM/pexels-photo-458530.jpg', user_id: 1 },
			{ picture: 'https://i.ibb.co/wsVPgnQ/pexels-photo-718978.jpg', user_id: 1 },
			{ picture: 'https://i.ibb.co/4ftYRCL/pexels-photo-897262.jpg', user_id: 2 },
			{ picture: 'https://i.ibb.co/Qk6Y6tG/pexels-photo-1319462.jpg', user_id: 3 },
			{ picture: 'https://i.ibb.co/0r2FYVh/pexels-photo-1570807.jpg', user_id: 1 },
			{ picture: 'https://i.ibb.co/Hz6byPk/pexels-photo-1670467.jpg', user_id: 1 },
			{ picture: 'https://i.ibb.co/qkY7PLb/woman-face-curly-hair-157920.jpg', user_id: 2 },
			{ picture: 'https://i.ibb.co/z6FvT4m/woman-morning-bathrobe-bathroom.jpg', user_id: 3 },
		])
	})
}
