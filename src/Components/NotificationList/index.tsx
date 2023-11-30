import * as S from "./styles";

interface IServiceNotificationListProps {
    company:string;
    service: string;
    status: string;
    description?: string;
}
const NotificationList = ({ company, service, status, description }: IServiceNotificationListProps) => {
    let color = ''
    
    if (status === 'down'){color = 'red'}
    else if (status === 'up'){color = 'green'}
    else {color = 'yellow'}

    return (
        <S.ContainerBox>
            <S.TitleBox>Last Incidents</S.TitleBox>
            <S.RowContainer>
                <S.LittleRowStatus>
                    <S.Title>Service: {company}</S.Title>
                    <S.ContainerStatus>
                        <p>{status}</p>
                        <S.CircleStatus style={{backgroundColor:`${color}`}} ></S.CircleStatus>
                    </S.ContainerStatus>
                </S.LittleRowStatus>
                <S.TextNotification>{service}</S.TextNotification>
                <S.TextNotification>{description}</S.TextNotification>
            </S.RowContainer>
        </S.ContainerBox>
    )


};

export { NotificationList };
