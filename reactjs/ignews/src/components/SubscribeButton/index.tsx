import { useSession, signIn } from 'next-auth/react';

import styles from './styles.module.scss';

interface SubsbribeButtonProps {
	priceId: string;
}

export function SubscribeButton({ priceId }: SubsbribeButtonProps) {
	const {data: session} = useSession();

	function handleSubscribe() {
		if(!session) {
			signIn('github');
			return;
		}

		
	}

	return (
		<button
			type="button"
			className={styles.subscribeButton}
			onClick={handleSubscribe}
		>
			Subsbribe now
		</button>
	);
}