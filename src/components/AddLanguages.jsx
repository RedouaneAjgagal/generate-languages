import React, { useState, useEffect } from 'react'

const AddLanguages = (props) => {
    const [lang, setLang] = useState('');
    const [languages, setLanguages] = useState([]);
    const changeHandler = (e) => {
        setLang(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (lang.trim() === '') return;
        setLanguages([{ lang: lang, id: crypto.randomUUID() }])
        setLang('');
    }
    useEffect(() => {
        props.getLanguages(languages);
    }, [languages]);
    return (
        <form onSubmit={submitHandler}>
            <input type="text" id='language' name='lang' onChange={changeHandler} value={lang} placeholder='Add a language' />
            <button>ADD</button>
        </form>
    )
}

export default AddLanguages