import styles from './styles.module.scss';

interface SubsbribeButtonProps {
	priceId: string;
}

export function SubscribeButton({ priceId }: SubsbribeButtonProps) {
	return (
		<button
			type="button"
			className={styles.subscribeButton}
		>
			Subsbribe now
		</button>
	);
}