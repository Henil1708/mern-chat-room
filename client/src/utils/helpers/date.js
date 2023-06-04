

class DateHelper {

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: convert date format  
    🗓 @created: 03/06/2023
    ============================*/
    convertFormat(date){

        const newDate = new Date(date);

        return newDate.toDateString()

    }

}

export default new DateHelper();