import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Title, Text, Link, CardScroll, Card, CardGrid, ContentCard } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader> IT's MO're than a team </PanelHeader>

		<Group header={<Header mode="secondary">Визитка</Header>}>
			<Div>
				<Text weight="regular" style={{ marginBottom: 16 }}>
					Состав этой команды не слишком большой, а если быть точнее, я тут один :(
					Но не стоит расстраиваться, ведь один человек всегда может внести вклад (я надеюсь).
				</Text>
				<Title level="1" weight="semibold" style={{ marginBottom: 16 }}>Информация обо мне</Title>
				<Text weight="regular" style={{ marginBottom: 16 }}>
					Меня зовут Ильдус, и мне нравится программировать. Раньше я любил заниматься олимпиадным программированием, сейчас же обучаюсь в университете ИТМО, кстати, откуда я взял название команды это слоган университета: "IT's MOre than a university". Этот университет я просто обожаю, но учиться приходится много и усердно, иначе меня ждёт отчисление.
Сейчас же живу в общежитии и пытаюсь заниматься самообучением и получать опыт, хочу устроиться на стажировку в большую компанию, а дальше открыть свой бизнес (не обязательно в IT).
				</Text>
				<Title level="1" weight="semibold" style={{ marginBottom: 16 }}>Мотивация участия в Вездеходе</Title>
				<Text weight="regular" style={{ marginBottom: 16 }}>
					Причина по которой я участвую - интерес.
					У меня никогда не было опыта в марафонах, но как я и говорил, хочу испытать всего как можно больше, чтобы в будущем я был бы как бывалый в айти. Также меня очень подтолкнули призы за баллы, если я их получу, они мне будут напоминать о моем участии.
					
				</Text>

			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
