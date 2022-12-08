import style from './checkbox.module.scss';
import pt from 'prop-types'

export const Checkbox = ({ checked, onClick}) => {
    return( 
        <div className={style.checkbox}>
            <div
                className={style.checkbox__check}
                data-checke={checked}
                onClick={onClick}
            ></div>
        </div>
    )
}

Checkbox.propTypes = {
    checked: pt.bool.isRequired,
    onCLick: pt.func.isRequired,
}