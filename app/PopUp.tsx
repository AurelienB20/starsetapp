import React, { ReactNode, useEffect } from "react";
import PopUpComp from "./ui/PopUpComp";

import { Book } from "./models/Book";
import { BookChapter } from "./models/ChapterBook";



const PopUp = () => {
    useEffect(() => {
        document.body.className = 'pop-up';
    }, []);

    return (
        <div className="popup">
            <PopUpComp
  trigger={true}
  image="../assets/images/51Lsn9WoycL._SX359_BO1,204,203,200_.jpg"
  title="../assets/images/314-3146194_mononoke-logo-princess-mononoke-logo-transparent.png"
  author="HAYAO MIYAZAKI"
  date="2019"
  genre={["FANTASTIQUE", "ANIME COMICS"]}
  description="L'histoire se déroule dans le Japon médiéval (ère Muromachi). Ashitaka, le prince de la tribu des Emishis, un peuple reclus au nord de Honshū, est frappé d'une malédiction après avoir tué Naggo, un dieu sanglier devenu un démon : son bras est animé d'une force surnaturelle, mais est rongé par l'entité démoniaque. La chamane du village le dit condamné à mourir et lui conseille de quitter le village afin d'aller chercher à l'ouest la cause de la colère de la nature et l'espoir de trouver la raison de sa malédiction."
  chapters = {[
    new BookChapter("Emishi","Alors que le Japon entre peu à peu dans l'ère moderne, une communauté traditionnelle Emishi vit caché dans les reliefs du nord-est du Japon depuis un demi-millénaire"),
    new BookChapter("Ashitaka, futur chef du village","Il est aussi la cause de son déclin progressif, le village a une moyenne d'age très élevé, elle place desormais tous ses espoirs en une personne : le jeune et valeureux Ashitaka, le futur chef du village."),
    new BookChapter("Tatari-Gami, futur chef du village","Un jour le village est attaqué par un tatari-gami, un dieu que la souffrance et la haine ont rendu maudit")
    // Ajoutez d'autres chapitres si nécessaire
  ]}
  similarBooks={[
    new Book("Book 1","../../../assets/51Lsn9WoycL._SX359_BO1,204,203,200_.jpg"),
    new Book("Book 2","../../../assets/51Lsn9WoycL._SX359_BO1,204,203,200_.jpg")
  ]}
/>
        </div>
    )
}

export default PopUp;