import axios from 'axios'

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface IComment {
	postId: number
	id: number
	name: string
	email: string
	body: string
}
const getData = async (url: string): Promise<IComment[]> => {
  // Your code here...
	try {
		const response = await axios.get<IComment[]>(url)
		return response.data
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

getData(COMMENTS_URL)
  .then(data => {
    // Your code here...
	  data.forEach(comment => {
			console.log(`ID: ${comment.id}, Email: ${comment.email}`)
	  })
  });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
