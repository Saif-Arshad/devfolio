import React from 'react'
import '../styles/letsTalk.scss'
import Link from 'next/link'

function LetsTalk() {
  return (
    <Link href={"/contact-us"}>

      <button className="cssbuttons-io-button">
        Let&apos;s Talk
        <div className="icon">
          <svg
            height="20"
            width="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </button>
    </Link>

  )
}

export default LetsTalk