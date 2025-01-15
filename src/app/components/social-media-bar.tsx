import React from 'react'
import { FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { urls } from '@/constants'

/**
 * SocialMediaBar Component
 * 
 * A reusable component for displaying a row of social media icons with links.
 *
 * Props:
 * - `iconSize` (number, optional): Sets the size of the icons in `em`. Default is `2`.
 * - `gap` (number, optional): Specifies the gap between icons in `rem`. Default is `1`.
 * - `styleClassName` (string, optional): Adds a CSS class for additional styling of each icon container. Default is `'foreground'`.
 *
 * Example Usage:
 * ```
 * <SocialMediaBar iconSize={3} gap={2} styleClassName="custom-class" />
 * ```
 * 
 * Notes:
 * - Default flexbox justify-content is flex-end. It can be changed in styleClassName
 * - Ensure that the `urls` object contains the correct URLs for your social media profiles.
 * - The component uses `react-icons` for the social media icons.
 * - Default icons are `FaInstagram`, `FaXTwitter`, and `FaLinkedin`.
 */

export default function SocialMediaBar({ iconSize = 2, gap = 1, styleClassName = 'foreground'}) {
  const socialMediaArray = [
    { url: urls.instagram, icon: FaInstagram },
    { url: urls.xTwitter, icon: FaXTwitter },
    { url: urls.linledIn, icon: FaLinkedin },
  ]

  return (
    // I did not use IconContext, Next could not read its Provider
    // moreover, my way is also sufficient
    <div className={`${styleClassName} flex flex-end`} 
         style={{ gap: `${gap}rem`, fontSize: `${iconSize}em` }}>
      {socialMediaArray.map((item, index) => {
        const IconComponent = item.icon 
        return <div key={index}>
          <a href={item.url} target='_blank' rel="noopener noreferrer">
            <IconComponent />
          </a>
        </div>
      })}
    </div>
  )
}
