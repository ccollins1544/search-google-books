const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/google_books"
);

const bookSeed = [
  {
    book_id: "tcSMCwAAQBAJ",
    title: "Harry Potter and the Cursed Child – Parts One and Two (Special Rehearsal Edition)", 
    authors: ["J.K. Rowling", "John Tiffany", "Jack Thorne"],
    publisher: "Pottermore Publishing",
    published_date: "2016-07-31",
    description: "Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play received its world premiere in London’s West End on 30th July 2016. It was always difficult being Harry Potter and it isn’t much easier now that he is an overworked employee of the Ministry of Magic, a husband and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.",
    page_count: 320,
    categories: ["Drama"],
    average_rating: 3.5,
    image_links: [
      {
        "smallThumbnail":"http://books.google.com/books/content?id=tcSMCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail":"http://books.google.com/books/content?id=tcSMCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      }
    ],
    language: "en",
    preview_link: "http://books.google.com/books?id=tcSMCwAAQBAJ&printsec=frontcover&dq=harry+potter&hl=&cd=1&source=gbs_api",
    canonical_volume_link: "https://books.google.com/books/about/Harry_Potter_and_the_Cursed_Child_Parts.html?hl=&id=tcSMCwAAQBAJ"
  },
  {
    book_id: "f280CwAAQBAJ",
    title: "Harry Potter: The Complete Collection (1-7)", 
    authors: ["J.K. Rowling"],
    publisher: "Pottermore Publishing",
    published_date: "2015-12-14",
    description: "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.",
    page_count: 4236,
    categories: ["Juvenile Fiction"],
    average_rating: 4.5,
    image_links: [
      {
        "smallThumbnail":"http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        "thumbnail":"http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      }
    ],
    language: "en",
    preview_link: "http://books.google.com/books?id=f280CwAAQBAJ&dq=harry+potter&hl=&cd=2&source=gbs_api",
    canonical_volume_link: "https://books.google.com/books/about/Harry_Potter_The_Complete_Collection_1_7.html?hl=&id=f280CwAAQBAJ"
  },
  {
    book_id: "zSzAwAAQBAJ",
    title: "The Hunger Games", 
    authors: ["Suzanne Collins"],
    publisher: "Scholastic",
    published_date: "2012",
    description: "First in the ground-breaking HUNGER GAMES trilogy, this new foiled edition of THE HUNGER GAMES is available for a limited period of time. Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    page_count: 464,
    categories: ["Juvenile Fiction"],
    average_rating: 4,
    image_links: [
      {
        "smallThumbnail":"http://books.google.com/books/content?id=_zSzAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail":"http://books.google.com/books/content?id=_zSzAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      }
    ],
    language: "en",
    preview_link: "http://books.google.com/books?id=_zSzAwAAQBAJ&printsec=frontcover&dq=hunger+games&hl=&cd=1&source=gbs_api",
    canonical_volume_link: "https://books.google.com/books/about/The_Hunger_Games.html?hl=&id=_zSzAwAAQBAJ"
  },
  {
    book_id: "FN5wMOZKTYMC",
    title: "Catching Fire (The Hunger Games, Book 2)", 
    authors: ["Suzanne Collins"],
    publisher: "Scholastic Inc.",
    published_date: "2010-06-01",
    description: "Against all odds, Katniss Everdeen has won the annual Hunger Games with fellow district tribute Peeta Mellark. But it was a victory won by defiance of the Capitol and their harsh rules. Katniss and Peeta should be happy. After all, they have just won for themselves and their families a life of safety and plenty. But there are rumors of rebellion among the subjects, and Katniss and Peeta, to their horror, are the faces of that rebellion. The Capitol is angry. The Capitol wants revenge.",
    page_count: 400,
    categories: ["Juvenile Fiction"],
    average_rating: 4,
    image_links: [
      {
        "smallThumbnail":"http://books.google.com/books/content?id=FN5wMOZKTYMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail":"http://books.google.com/books/content?id=FN5wMOZKTYMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      }
    ],
    language: "en",
    preview_link: "http://books.google.com/books?id=FN5wMOZKTYMC&printsec=frontcover&dq=hunger+games&hl=&cd=4&source=gbs_api",
    canonical_volume_link: "https://play.google.com/store/books/details?id=FN5wMOZKTYMC"
  },
  {
    book_id: "UbfnTcmkaKkC",
    title: "The Stand", 
    authors: ["Stephen King"],
    publisher: "Anchor",
    published_date: "2008-06-24",
    description: "Stephen Kingâ€™s apocalyptic vision of a world blasted by plague and tangled in an elemental struggle between good and evil remains as riveting and eerily plausible as when it was first published. Soon to be a television series A patient escapes from a biological testing facility, unknowingly carrying a deadly weapon: a mutated strain of super-flu that will wipe out 99 percent of the worldâ€™s population within a few weeks. Those who remain are scared, bewildered, and in need of a leader. Two emergeâ€”Mother Abagail, the benevolent 108-year-old woman who urges them to build a peaceful community in Boulder, Colorado; and Randall Flagg, the nefarious â€œDark Man,â€ who delights in chaos and violence. As the dark man and the peaceful woman gather power, the survivors will have to choose between themâ€”and ultimately decide the fate of all humanity. (This edition includes all of the new and restored material first published in The Stand: The Complete And Uncut Edition.)",
    page_count: 320,
    categories: ["Fiction"],
    average_rating: 4,
    image_links: [
      {
        "smallThumbnail":"http://books.google.com/books/content?id=UbfnTcmkaKkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail":"http://books.google.com/books/content?id=UbfnTcmkaKkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      }
    ],
    language: "en",
    preview_link: "http://books.google.com/books?id=UbfnTcmkaKkC&printsec=frontcover&dq=the+stand&hl=&cd=1&source=gbs_api",
    canonical_volume_link: "https://play.google.com/store/books/details?id=UbfnTcmkaKkC"
  },
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
