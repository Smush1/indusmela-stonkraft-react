import chess from '../images/chess.png'
import flowerPot from '../images/flower-pot.png'
import penStand from '../images/pen-stand.png'
import kitchenSet from '../images/kitchen-set.png'
import cross from '../images/cross.png'
import skippingRope from '../images/skipping-rope.png'




import popupChess from '../images/popupchess.png'
import cardGames from '../images/card-games.png'
import boardGames from '../images/Board-games.png'
import puzzleKits from '../images/Puzzle-kits.png'
import showPiece from '../images/show-piece.png'
import idols from '../images/idols.png'
import homeOrganizer1 from '../images/home-organiser1.png'
import homeOrganizer2 from '../images/home-organiser2.png'
import artCraft1 from '../images/art-craft1.png'
import artCraft2 from '../images/art-craft2.png'
import kitchenBathroom1 from '../images/kitchenbathroom1.png'
import hinduIdols from '../images/hinduidols.png'
import statues from '../images/statues.png'
import sportEquipments1 from '../images/sportsequip1.png'
import sportEquipments2 from '../images/sportsequip2.png'








const coreCategories = [ 
    {
    "id": 1,
    "categoryTitle": "Tournament Chess Boards ",
    "categoryImage": chess,
    "dataTarget": "#toysgames",
    "altText" : "Toys & Games"
    },
    {
    "id": 2,
    "categoryTitle": "Wooden Chess Boards",
    "categoryImage": chess,
    "dataTarget": "#homedecor",
    "altText" : "Home Decor"
    },
    {
    "id": 3,
    "categoryTitle": "Marble Chess Boards",
    "categoryImage": flowerPot,
    "dataTarget": "#homeorganiser",
    "altText" : "Home Organiser"
    },
    {
    "id": 4,
    "categoryTitle": "Chess Pieces",
    "categoryImage": penStand,
    "dataTarget": "#artscraft",
    "altText" : "Arts & Craft"
    },
    {
    "id": 5,
    "categoryTitle": "Premium Chess Pieces",
    "categoryImage": kitchenSet,
    "dataTarget": "#kitchenbathroom",
    "altText" : "Kitchen & Bathroom"
    },
    {
    "id": 6,
    "categoryTitle": "Puzzles and 3D DIY Kits",
    "categoryImage": cross,
    "dataTarget": "#religiousitems",
    "altText" : "Religious Item"
    },
    {
    "id": 7,
    "categoryTitle": "Sports Accessories",
    "categoryImage": skippingRope,
    "dataTarget": "#sportsequipment",
    "altText" : "Sports and Equipments"
    },
    {
    "id": 8,
    "categoryTitle": `Pet Accessories`,
    "categoryImage": chess,
    "dataTarget": "#statuessculptures",
    "altText" : "Statues & Sculptures"
    }
]




const categoryRelatedData = [
    {   
        "id": 1,
        "modalId": "toysgames",
        "name": "TOYS & GAMES",
        "description": "Discover handcrafted toys and games from Stonekraft, blending tradition with fun.Designed for all ages, our collection brings joy, creativity, and timeless play to every home",
 
        "image1": popupChess,
        "image1_altText": "Chess Table",
 
        "image2": popupChess,
        "image2_altText": "Board Games",
        
        "image3": popupChess,
        "image3_altText": "Card Games",
 
        "link1": "https://indusmela.com/products/stonkraft-plastic-playing-cards-poker-size-cards-set-of-2-poker-playing-cards-for-flash-rummy-bridge-party-games",
        "link1_title": "Card Games",
        "link1_Image":cardGames,
 
        "link2":"https://indusmela.com/search?q=board+games&options%5Bprefix%5D=last&filter.p.vendor=StonKraft&filter.v.price.gte=&filter.v.price.lte=&filter.p.t.category=tg-2-5&sort_by=relevance",
        "link2_title":"Board Games",
        "link2_Image":boardGames,
 
        "link3": "https://indusmela.com/collections/puzzles-construction-toys?sort_by=best-selling&filter.p.vendor=StonKraft&filter.v.price.gte=&filter.v.price.lte=&filter.p.t.category=tg-4",
        "link3_title":"Puzzle Kits",
        "link3_Image": puzzleKits,

        "viewMoreLink": "https://indusmela.in/collections/tournament-chess"
    },
    {   
        "id": 2,
        "modalId": "homedecor",
        "name": "Home Decor",
        "description": "Elevate your space with Stonekraft’s handcrafted home décor—timeless wall accents, sculptures, and statement pieces that blend tradition with elegance, bringing warmth and artistry to every corner.",
 
        "image1": showPiece,
        "image1_altText": "Show Piece",
 
        "image2": idols,
        "image2_altText": "Idols",
        
 
        "link1": "https://indusmela.in/collections/stonkraft?filter.p.product_type=D%C3%A9cor+Articles&filter.p.product_type=Ganesha&filter.p.product_type=Hanging+Diya&filter.p.product_type=Kamdhenu+Cow&filter.p.product_type=Krishna+%2F+Radha&filter.p.product_type=Lakshmi&filter.p.product_type=Ram+Lalla%2C+Darbar&filter.p.product_type=Standing+Diya&sort_by=best-selling",
        "link1_title": "show piece",
        "link1_Image":showPiece,
 
        "link2":"https://indusmela.in/collections/hindu-god-idols?sort_by=best-selling&filter.p.vendor=StonKraft&filter.v.price.gte=&filter.v.price.lte=",
        "link2_title":"idols",
        "link2_Image":idols,
 
        "viewMoreLink": "https://indusmela.in/collections/wooden-chess"
    },
    {   
        "id": 3,
        "modalId": "homeorganiser",
        "name": "Home Organiser",
        "description": "Keep your space clutter-free with Stonekraft’s handcrafted home organizers—elegant, functional, and designed to add a touch of tradition while keeping your essentials neatly arranged.",
 
        "image1": homeOrganizer1,
        "image1_altText": "show piece",
 
        "image2": homeOrganizer2,
        "image2_altText": "idols",
        
        "image3": homeOrganizer1,
        "image3_altText": "idols",

        "viewMoreLink": "https://indusmela.in/collections/marble-chess"
    },
    {   
        "id": 4,
        "modalId": "artscraft",
        "name": "Arts & Craft",
        "description": "Unleash your creativity with Stonekraft’s arts and crafts collection—handcrafted DIY kits and artistic pieces that celebrate traditional craftsmanship and inspire endless possibilities.",
 
        "image1": artCraft1,
        "image1_altText": "show piece",
 
        "image2": artCraft2,
        "image2_altText": "idols",
        
        "image3": artCraft1,
        "image3_altText": "idols",
 

        "viewMoreLink": "https://indusmela.in/collections/chess-pieces"
    },
    {   
        "id": 5,
        "modalId": "kitchenbathroom",
        "name": "Kitchen & Bathroom",
        "description": "Enhance your kitchen and bathroom with Stonekraft’s elegant handcrafted décor—timeless designs that add sophistication, charm, and a touch of artistry to your everyday spaces",
 
        "image1": kitchenBathroom1,
        "image1_altText": "Kitchen bathroom",
 
        "image2": kitchenBathroom1,
        "image2_altText": "idols",
        
        "image3": kitchenBathroom1,
        "image3_altText": "idols",


        "viewMoreLink": "https://indusmela.in/collections/premium-chess"
    },
    {   
        "id": 6,
        "modalId": "religiousitems",
        "name": "Religious Items",
        "description": "Enhance your kitchen and bathroom with Stonekraft’s elegant handcrafted décor—timeless designs that add sophistication, charm, and a touch of artistry to your everyday spaces.",
 
        "image1": cross,
        "image1_altText": "Chess Table",
 
        "image2": hinduIdols,
        "image2_altText": "Board Games",
        
        "image3": cross,
        "image3_altText": "Card Games",
 
        "link1": "https://indusmela.in/search?q=cross&options%5Bprefix%5D=last&filter.p.vendor=StonKraft&filter.v.price.gte=&filter.v.price.lte=&sort_by=relevance",
        "link1_title": "Cross",
        "link1_Image":cardGames,
 
        "link2":"https://indusmela.in/collections/hindu-god-idols?sort_by=best-selling&filter.p.vendor=StonKraft&filter.v.price.gte=&filter.v.price.lte=",
        "link2_title":"Hindu Idols",
        "link2_Image":boardGames,
 
        "link3": "https://indusmela.in/search?q=diya&options%5Bprefix%5D=last&filter.p.vendor=StonKraft&filter.v.price.gte=&filter.v.price.lte=&filter.p.product_type=Hanging+Diya&filter.p.product_type=Standing+Diya&sort_by=relevance",
        "link3_title":"Diyas",
        "link3_Image": puzzleKits,

        "viewMoreLink": "https://indusmela.in/collections/puzzles-construction-toys"
    },
    {   
        "id": 7,
        "modalId": "statuessculptures",
        "name": "Statues & Sculptures",
        "description": "Bring timeless artistry into your space with Stonekraft’s handcrafted statues and sculptures—exquisite pieces that embody tradition, spirituality, and elegance in every detail.",
 
        "image1": statues,
        "image1_altText": "Chess Table",
 
        "image2": hinduIdols,
        "image2_altText": "Board Games",
        
        "image3": statues,
        "image3_altText": "Card Games",

        "viewMoreLink": "https://indusmela.in/collections/sports"
    },
    {   
        "id": 8,
        "modalId": "sportsequipment",
        "name": "Sports Accessories",
        "description": "Elevate your game with Stonekraft’s handcrafted sports accessories—a blend of durability, tradition, and artistry, designed to add a unique touch to your sporting experience.",
 
        "image1": sportEquipments1,
        "image1_altText": "Chess Table",
 
        "image2": sportEquipments2,
        "image2_altText": "Board Games",
        
        "image3": sportEquipments1,
        "image3_altText": "Card Games",
 

        "viewMoreLink": "https://indusmela.in/collections/pet-toys"
    }
]






export { coreCategories, categoryRelatedData }