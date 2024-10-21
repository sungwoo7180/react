import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { callModifyMenuAPI } from '../../apis/MenuAPICalls';

function MenuModifyForm() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const result = useSelector(state => state.menuReducer);

    /* 입력 값 state 저장 */
    const [modifyMenu, setModifyMenu] = useState(
        {
            id: 0,
            menuName: '',
            menuPrice: 0,
            categoryName: '한식',
            isOrderable: false,
            detail: {
                description: '',
                image: ''
            }
        }
    );

    /* 입력 값 변경 시 이벤트 핸들러 */
    const onChangeHandler = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        /* json-server에 저장될 데이터 타입 맞추기 위한 코드 */
        switch (name) {
            case 'menuPrice':
                value = parseInt(value);
                break;
            case 'isOrderable':
                value = !!value;
                break;
            case 'description':
                name = 'detail';
                value = {
                    description: value,
                    image: modifyMenu.detail.image
                };
                break;
        }

        setModifyMenu(
            {
                ...modifyMenu,
                id: id,
                [name]: value
            }
        );
    }

    useEffect(
        () => {
            /* 메뉴 수정 완료 확인 후 /menu로 이동 */
            if (result.modify) {
                alert('메뉴 수정');
                navigate(`/menu`);
            }
        },
        [result]
    );

    const onClickHandler = () => {
        /* modifyMenu에 대한 유효성 검사 후 호출 */
        dispatch(callModifyMenuAPI(modifyMenu));
    }

    return (
        <>
            <h1>{id}번 메뉴 수정</h1>
            <label>메뉴 이름 : </label>
            <input type="text" name="menuName" value={modifyMenu.menuName} onChange={onChangeHandler} />
            <br />
            <label>메뉴 가격 : </label>
            <input type="number" name="menuPrice" value={modifyMenu.menuPrice} onChange={onChangeHandler} />
            <br />
            <label>카테고리 : </label>
            <select name="categoryName" value={modifyMenu.categoryName} onChange={onChangeHandler}>
                <option>한식</option>
                <option>일식</option>
                <option>서양</option>
                <option>동양</option>
                <option>커피</option>
                <option>쥬스</option>
                <option>기타</option>
            </select>
            <br />
            <label>판매 여부 : </label>
            <select name="isOrderable" value={modifyMenu.isOrderable} onChange={onChangeHandler}>
                <option value="true">판매 가능</option>
                <option value="false">판매 불가</option>
            </select>
            <br />
            <label>설명 : </label>
            <textarea name="description" value={modifyMenu.detail.description} onChange={onChangeHandler}></textarea>
            <br />
            {/* <label>사진 : </label>
            <input
                type="file"
                name="image"
                accept='image/*'
                onChange={fileChangeHandler}
            />
            <br /> */}
            <button onClick={onClickHandler}>메뉴 수정</button>
        </>
    )
}

export default MenuModifyForm;