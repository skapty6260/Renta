'use client'
import { useUiStore } from '@/store'
import { INavbarPartItem, NavbarPart } from './list'
import styles from './navbar.module.scss'

import {
	FaBuilding,
	FaBasketShopping,
	FaBusinessTime,
	FaMoneyBillWave,
} from 'react-icons/fa6'
import { MdClose } from 'react-icons/md'

export const NavbarLayout: React.FC<{
	variant?: 'horizontal' | 'extended'
}> = ({ variant = 'horizontal' }) => {
	const { navbar_variant } = useUiStore()

	const firstList: INavbarPartItem[] = [
		{
			label: 'Недвижимость',
			variant: 'main',
			customStyles: {
				default: `bg-blue-600 ${
					navbar_variant == 'horizontal' && 'text-white'
				}`,
				active: 'bg-[#ebebeb] text-blue-600',
			},
			noShrinkAffect: true,
			icon: {
				default: <FaBuilding />,
				active: <MdClose />,
			},
			type: 'dropdown',
		},
		{
			label: 'Покупка',
			type: 'dropdown',
			icon: {
				default: <FaBasketShopping />,
			},
			variant: variant == 'extended' ? 'main' : 'default',
		},
		{
			label: 'Аренда',
			type: 'dropdown',
			icon: {
				default: <FaBusinessTime />,
			},
			variant: variant == 'extended' ? 'main' : 'default',
		},
		{
			label: 'Продажа',
			type: 'link',
			url: '/sale',
			icon: {
				default: <FaMoneyBillWave />,
			},
			variant: variant == 'extended' ? 'main' : 'default',
		},
	]

	const lastList: INavbarPartItem[] = [
		{ label: 'Спонсорам', type: 'link', url: '/sponsors' },
		{ label: 'Контакты', type: 'link', url: '/contacts' },
		{ label: 'Личный кабинет', type: 'link', url: '/me' },
	]

	if (navbar_variant == 'extended' && variant == 'horizontal') return null

	return (
		<nav
			className={variant == 'extended' ? styles.navbarExtended : styles.navbar}
		>
			<NavbarPart
				listClassName={
					variant == 'extended' ? styles.firstListExtended : styles.firstList
				}
				isExtended={navbar_variant == 'extended'}
				data={firstList}
			/>

			<div
				className={variant == 'extended' ? styles.logoExtended : styles.logo}
			>
				RENTA
			</div>

			<NavbarPart
				listClassName={
					variant == 'extended' ? styles.lastListExtended : styles.lastList
				}
				isExtended={navbar_variant == 'extended'}
				data={lastList}
			/>
		</nav>
	)
}
