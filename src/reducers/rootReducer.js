const initState = {
    posts:[
        {id: '1',
        title: "Green ninja posted something dumb.",
        body: "inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut"},
        {id: '2',
        title: "Red ninja posted something dumb.",
        body: "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur"},
        {id: '3',
        title: "White ninja posted something dumb.",
        body: "sunt dolores aut doloribus\ndolore doloribus voluptates tempora et\ndoloremque et quo\ncum asperiores sit consectetur dolorem"}
    ]
}
const rootReducer = (state = initState, action) =>{
    //console.log(action.type);
    switch(action.type){
        case 'DELETE_POST':
            let newPosts = state.posts.filter( post => {
                return action.id !== post.id
            });
            return {
                ...state,
                posts : newPosts
            }
            break;
    }
    return state;
}

export default rootReducer;
