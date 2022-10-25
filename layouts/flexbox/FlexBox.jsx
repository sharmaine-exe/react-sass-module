import {flexbox} from './flexbox.module.scss'

function FlexBox({children, ...props}){
    return (
        <div className={flexbox}>
            {children}
        </div>

    )
}

export default FlexBox