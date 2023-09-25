import React from 'react'

export default function ImageItem({ imgData }) {
    return (
        <img src={imgData.download_url} alt="" style={{ width: 400 }} />
    )
}
