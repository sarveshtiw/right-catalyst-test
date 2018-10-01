import axios from 'axios';

class ItemService {

    async sendData(data) {
        const response = await axios.post('http://localhost:4200/items/add/post', {
			    item: data
			});
	return response;
			/*.then((response) => {
			    this.setState({
				items: response.data
			    })
			})
			.catch((error) => {
			    console.log(error);
			});*/
    }

    async updateDate(data, id) {
       const response = await axios.post('http://localhost:4200/items/update/'+id, {
            item: data
        })
	return response;
        /*.then((response) => {
            this.setState({
                items: response.data
            })
        })
        .catch((error) => {
            console.log(error)
        })*/
    }

   async deleteData(id) {
        const response = await axios.get('http://localhost:4200/items/delete/'+id);
	return response;
        /*.then(() => {
            console.log('Deleted')
        })
        .catch((error) => {
            console.log(error)
        })*/
    }
}

export default ItemService;
