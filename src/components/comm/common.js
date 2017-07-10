import mCsheet from './mc-sheet'
import mCdialog from './mc-dialog'

let csheet = null,cdialog = null;
export default function sheet(params){
    
    if(!csheet){
        csheet = new mCsheet();
    }

    csheet.$data = {
        show:true,
        ...params
    }
    
}

export function dialog (tips){
    if(!cdialog){
        cdialog = new mCdialog();
    }
    cdialog.$data = {
        show:true,
        tips:tips
    }
    
}

