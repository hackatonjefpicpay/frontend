import { useEffect, useState } from "react";
import * as S from "./styles";
import { GetJiraHistoric, GetOracleHistoric } from "../../Services/utils";

interface IServiceNotificationListProps {
    data: any
}
const NotificationList = ({data }: IServiceNotificationListProps) => {


    return (
        <S.ContainerBox>
            <S.TitleBox>Last Incidents</S.TitleBox>
            {data.map((dado: any) => {
                console.log(dado)
                return(
                    <>
                        <S.RowContainer>
                            <S.LittleRowStatus>
                                <S.Title>{dado[1].name}</S.Title>
                                <S.ContainerStatus>
                                    <S.CircleStatus style={{backgroundColor:`${dado[1]?.status.toLowerCase() == "resolved" ? 'green' : 'red'}`}} ></S.CircleStatus>
                                </S.ContainerStatus>
                            </S.LittleRowStatus>
                            <S.TextNotification>Impacto: {dado[1].impact ? dado[1].impact : 'Não medido'}</S.TextNotification>
                        </S.RowContainer>
                    </>)
                    })}
        </S.ContainerBox>
    )


};

export { NotificationList };
