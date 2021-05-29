const express = require("express");
const booksRouter = express.Router();
function router(nav){
    var books = [
        {
            title: 'My Life: An Illustrated Autobiography',
            author: 'A. P. J. Abdul Kalam',
            genre: 'Biography',
            img: "APJ.jpg", 
            about:'The story of my life has become intertwined with the story of this country. And somewhere along the way, as I met a million children across this land, I too learnt from a million minds. This book was not written to only tell my story. I want every young reader to think that this book is his or her story too. A.P.J. Abdul Kalam has been one of the most iconic figures of Independent India. A scientist, leader, thinker, teacher and writer, he achieved remarkable success in various fields. Yet, what endeared him to so many was his dedication to the idea of a developed India, his simple and direct way of interacting with people and his deep love for his fellowmen. In My Life, Kalam writes his life story starting from his days growing up at Rameswaram; about working on Indias space and missile programmes; his years as the eleventh President of India; and about his life thereafter. Full of anecdotes that demonstrate the importance of hard work, commitment, courage and innovative thinking, this autobiography is a wonderful introduction to a remarkable life. Beautifully illustrated and simply written. My Life will inspire readers of all ages.'
            },
        {
        title: 'The 3 Mistakes of My Life',
        author: 'Chetan Bhagat',
        genre: ' Fiction',
        img: "kai.jpg",
        about:'In late-2000, a young boy in Ahmedabad called Govind dreamt of having a business. To accomodate his friends Ish and Omis passion, they open a cricket shop. Govind wants to make money and thinks big. Ish is all about nurturing Ali, the batsman with a rare gift. Omi knows his limited capabiltiies and just wants to be with his friends. However, nothing comes easy in a turbulent city. To realize their goals, they will have to face it all - religious politics, earthquakes, riots, unacceptable love and above all, their own mistakes.'
        },
        {
            title: 'The Ministry of Utmost Happiness',
            author: 'Arundhati Roy',
            genre: 'Fiction',
            img: "mini.jpg",
            about:'The Ministry of Utmost Happiness takes us on an intimate journey across the Indian subcontinent—from the cramped neighborhoods of Old Delhi and the roads of the new city to the mountains and valleys of Kashmir and beyond, where war is peace and peace is war. Braiding together the lives of a diverse cast of characters who have been broken by the world they live in and then rescued, patched together by acts of love—and by hope, here Arundhati Roy reinvents what a novel can do and can be.'
           
        },
        {
            title: 'Harry Potter',
            author: 'J K Rowling',
            genre: 'Fantacy',
            img: "harry.jpg",
            about:'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.'
            },
            {
                title: 'The Pilgrimage',
                author: 'Paulo Coelho',
                genre: 'Adventure',
                img: "pil.jpg",
                about:'The Pilgrimage is a 1987 novel by Brazilian novelist Paulo Coelho. It is a recollection of Paulos experiences as he made his way across northern Spain on a pilgrimage to Santiago de Compostela. The novel serves as part adventure story, part guide to self-discovery.'
                }
                
    ]
    
    booksRouter.get('/',function(req,res){
        res.render("books",{
            nav,
            title:'Library',
            books
        });
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('book',{
            nav,
            title:'Library',
            book: books[id]
        });
    });

    return booksRouter;
}


module.exports = router;