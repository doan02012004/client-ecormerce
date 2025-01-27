
export const categoriesData = [
    {
        _id:'1',
        name:"Thời trang nam",
        type:0,
        display_name:'Nam',
        slug:'thoi-trang-nam',
        parent_id:null,
        children:[
            {
                _id:'1.1',
                name:"Quần nam",
                type:1,
                display_name:'Nam',
                slug:'quan-nam',
                parent_id:'1',
                children:[
                    {
                        _id:'1.1.1',
                        name:"Quần jean nam",
                        type:2,
                        slug:'quan-jean-nam',
                        parent_id:'1.1',
                        children:[]
                    },
                    {
                        _id:'1.1.2',
                        name:"Quần âu nam",
                        type:2,
                        slug:'quan-au-nam',
                        parent_id:'1.1',
                        children:[]
                    },
                    {
                        _id:'1.1.3',
                        name:"Quần sock nam",
                        type:2,
                        slug:'quan-sock-nam',
                        parent_id:'1.1',
                        children:[]
                    }
                ]
            },
            {
                _id:'1.2',
                name:"Áo nam",
                type:1,
                slug:'ao-nam',
                parent_id:'1',
                children:[
                    {
                        _id:'1.2.1',
                        name:"Áo jean nam",
                        type:2,
                        slug:'ao-jean-nam',
                        parent_id:'1.2',
                        children:[]
                    },
                    {
                        _id:'1.2.2',
                        name:"Áo ba lỗ nam",
                        type:2,
                        slug:'quan-ba-lo-nam',
                        parent_id:'1.2',
                        children:[]
                    },
                    {
                        _id:'1.2.3',
                        name:"Áo thun nam",
                        type:2,
                        slug:'ao-sock-nam',
                        parent_id:'1.2',
                        children:[]
                    }
                ]
            },
        ]
    },
    {
        _id:'2',
        name:"Thời trang nữ",
        type:0,
        slug:'thoi-trang-nu',
        parent_id:null,
        children:[
            {
                _id:'2.1',
                name:"Quần nữ",
                type:1,
                slug:'quan-nu',
                parent_id:'2',
                children:[
                    {
                        _id:'2.1.1',
                        name:"Quần jean nữ",
                        type:2,
                        slug:'quan-jean-nu',
                        parent_id:'2.1',
                        children:[]
                    },
                    {
                        _id:'2.1.2',
                        name:"Quần âu nu",
                        type:2,
                        slug:'quan-au-nu',
                        parent_id:'2.1',
                        children:[]
                    },
                    {
                        _id:'2.1.3',
                        name:"Quần ngủ nu",
                        type:2,
                        slug:'quan-ngu-nu',
                        parent_id:'2.1',
                        children:[]
                    }
                ]
            },
            {
                _id:'2.2',
                name:"Áo nữ",
                type:1,
                slug:'ao-nu',
                parent_id:'2',
                children:[
                    {
                        _id:'2.2.1',
                        name:"Áo jean nu",
                        type:2,
                        slug:'ao-jean-nu',
                        parent_id:'2.2',
                        children:[]
                    },
                    {
                        _id:'2.2.2',
                        name:"Áo crop top",
                        type:2,
                        slug:'ao-crop-top',
                        parent_id:'2.2',
                        children:[]
                    },
                    {
                        _id:'2.2.3',
                        name:"Áo thun nu",
                        type:2,
                        slug:'ao-sock-nu',
                        parent_id:'2.2',
                        children:[]
                    }
                ]
            },
        ]
    },
]