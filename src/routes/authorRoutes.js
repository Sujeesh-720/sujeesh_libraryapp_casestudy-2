const express = require("express");
const authorsRouter = express.Router();
function router(nav){
    var authors = [
        {
        title: 'William Shakespeare',
        knownas: 'English playwright',
        bornin: 'United Kingdom',
        img: "shake.jpg",
        about:'William Shakespeare, Shakespeare also spelled Shakspere, byname Bard of Avon or Swan of Avon, (baptized April 26, 1564, Stratford-upon-Avon, Warwickshire, England—died April 23, 1616, Stratford-upon-Avon), English poet, dramatist, and actor often called the English national poet and considered by many to be the greatest dramatist of all time.Shakespeare occupies a position unique in world literature. Other poets, such as Homer and Dante, and novelists, such as Leo Tolstoy and Charles Dickens, have transcended national barriers, but no writer’s living reputation can compare to that of Shakespeare, whose plays, written in the late 16th and early 17th centuries for a small repertory theatre, are now performed and read more often and in more countries than ever before. The prophecy of his great contemporary, the poet and dramatist Ben Jonson, that Shakespeare “was not of an age, but for all time,” has been fulfilled.'
        },
        {
            title: 'Charle Dickens',
            knownas: 'English writer',
            bornin: 'United Kingdom',
            img: "dickens.jpg",
            about:'Charles Dickens, in full Charles John Huffam Dickens, (born February 7, 1812, Portsmouth, Hampshire, England—died June 9, 1870, Gad’s Hill, near Chatham, Kent), English novelist, generally considered the greatest of the Victorian era. His many volumes include such works as A Christmas Carol, David Copperfield, Bleak House, A Tale of Two Cities, Great Expectations, and Our Mutual Friend.Dickens enjoyed a wider popularity during his lifetime than had any previous author. Much in his work could appeal to the simple and the sophisticated, to the poor and to the queen, and technological developments as well as the qualities of his work enabled his fame to spread worldwide very quickly. His long career saw fluctuations in the reception and sales of individual novels, but none of them was negligible or uncharacteristic or disregarded, and, though he is now admired for aspects and phases of his work that were given less weight by his contemporaries, his popularity has never ceased. The most abundantly comic of English authors, he was much more than a great entertainer. The range, compassion, and intelligence of his apprehension of his society and its shortcomings enriched his novels and made him both one of the great forces in 19th-century literature and an influential spokesman of the conscience of his age.'
            },
            {
                title: 'Ernest Hemingway',
                knownas: 'American novelist',
                bornin: 'United States',
                img: "ernest.jpg",
                about:'Ernest Hemingway (1899-1961), born in Oak Park, Illinois, started his career as a writer in a newspaper office in Kansas City at the age of seventeen. After the United States entered the First World War, he joined a volunteer ambulance unit in the Italian army. Serving at the front, he was wounded, was decorated by the Italian Government, and spent considerable time in hospitals. After his return to the United States, he became a reporter for Canadian and American newspapers and was soon sent back to Europe to cover such events as the Greek Revolution.During the twenties, Hemingway became a member of the group of expatriate Americans in Paris, which he described in his first important work, The Sun Also Rises (1926). Equally successful was A Farewell to Arms (1929), the study of an American ambulance officer’s disillusionment in the war and his role as a deserter. Hemingway used his experiences as a reporter during the civil war in Spain as the background for his most ambitious novel, For Whom the Bell Tolls (1940). Among his later works, the most outstanding is the short novel, The Old Man and the Sea (1952), the story of an old fisherman’s journey, his long and lonely struggle with a fish and the sea, and his victory in defeat.'
                },
                {
                    title: 'Mark Twain',
                    knownas: 'American writer',
                    bornin: 'United States',
                    img: "mark.jpg",
                    about:'Mark Twain, pseudonym of Samuel Langhorne Clemens, (born November 30, 1835, Florida, Missouri, U.S.—died April 21, 1910, Redding, Connecticut), American humorist, journalist, lecturer, and novelist who acquired international fame for his travel narratives, especially The Innocents Abroad (1869), Roughing It (1872), and Life on the Mississippi (1883), and for his adventure stories of boyhood, especially The Adventures of Tom Sawyer (1876) and Adventures of Huckleberry Finn (1885). A gifted raconteur, distinctive humorist, and irascible moralist, he transcended the apparent limitations of his origins to become a popular public figure and one of America’s best and most beloved writers.'
                    },
                    {
                        title: 'J. K. Rowling',
                        knownas: 'British author',
                        bornin: 'United Kingdom',
                        img: "jkr.jpg",
                        about:'J.K. Rowling, in full Joanne Kathleen Rowling, pen name of Joanne Rowling, (born July 31, 1965, Yate, near Bristol, England), British author, creator of the popular and critically acclaimed Harry Potter series, about a young sorcerer in training.After graduating from the University of Exeter in 1986, Rowling began working for Amnesty International in London, where she started to write the Harry Potter adventures. In the early 1990s she traveled to Portugal to teach English as a foreign language, but, after a brief marriage and the birth of her daughter, she returned to the United Kingdom, settling in Edinburgh. Living on public assistance between stints as a French teacher, she continued to write.'
                        }
    
    ]
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title:'Library',
            authors
        });
    });
    
    authorsRouter.get('/:iid',function(req,res){
        const iid = req.params.iid
        res.render('author',{
            nav,
            title:'Library',
            author: authors[iid]
        });
    });

    return authorsRouter;
}


module.exports = router;