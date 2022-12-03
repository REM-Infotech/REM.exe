import ElawImage from '../assets/cardmedia/elaw.png';
import EsajImage from '../assets/cardmedia/esaj.png';
import ProjudiImage from '../assets/cardmedia/projudi.png';

export const getBotImage = (plataform: string) => {
    let image;
    switch (plataform) {
        case 'elaw':
            image = ElawImage
            break;
        case 'esaj':
            image = EsajImage
            break;
        case 'projudi':
            image = ProjudiImage
            break;
    }

    return image
}