// This was asked in one of the interviews (LTI Mindtree interview video youtube)
// how do you access/console log all the subItems in the below nodes
const json = [
    {
        "name": "menu-1",
        "link": "http://xyz/1",
        "subItems": [
            {
                "name": "menu-2",
                "link": "http://xyz/2",
                "subItems": [
                    {
                        "name": "menu-3",
                        "link": "http://xyz/3",
                        "subItems": [
                            {
                                "name": "menu-4",
                                "link": "http://xyz/4",
                                "subItems": [
                                    {
                                        "name": "menu-5",
                                        "link": "http://xyz/5",
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

const logSubitems = (data) => {
    data.forEach(item => {
        console.log(item.subItems);
        if (item.subItems?.length > 0) { // Corrected condition
            logSubitems(item.subItems)
        }
    });
}

logSubitems(json[0].subItems);
