'use client';

export default function Button({data,onclick}){

    return (<button type={"button"}
                    onClick={onclick }>{data}</button>);
}