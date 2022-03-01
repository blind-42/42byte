import React, { useState } from 'react';
import { PageName, Squares, TopBar } from 'styles/styled';
import { ModalBackdrop, ReportModalContainer, ContentContainer, Instruction, ReportBox, ListName, ReportList, Buttons } from './styled';

type GreetingProps = {
	clickModalHandler: () => void;
	reportHandler: (reportIssue: string) => void;
};

export default function ReportModal ({ clickModalHandler, reportHandler }: GreetingProps) {
	const [reportIssue, setReportIssue] = useState<string>('');
	const [openIssue, setOpenIssue] = useState<boolean>(false);

	const issueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setOpenIssue(false);
		setReportIssue(event.target.value);
	}

	const issueInputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setReportIssue(event.target.value);
	}

	const openIssueHandler = () => {
		setOpenIssue(!openIssue);
		setReportIssue('');
	}

	const report = () => {
		reportHandler(reportIssue);
		clickModalHandler();
	}
	console.log(reportIssue)
	return (
		<>
			<ModalBackdrop onClick={clickModalHandler}>
				<ReportModalContainer onClick={(e) => e.stopPropagation()}>
					<TopBar>
						<PageName>신고하기</PageName>
						<Squares>
							<div>&#9866;</div>
							<div>&#10064;</div>
							<div onClick={clickModalHandler}>&times;</div>
						</Squares>
					</TopBar>
					<ContentContainer>
						<Instruction>
							<div>신고는 반대 의견을 표시하는 기능이 아닙니다.</div>
							<div>허위신고일 경우, 서비스 이용이 제한될 수 있으니 신중하게 신고해주세요.</div>
						</Instruction>
						<ReportBox>
							<ListName>신고사유</ListName>
							<ReportList>
								<form>
									<div><input type="radio" onChange={issueHandler} name="issue" value="욕설/혐오"/>욕설/폭력/혐오/차별적 표현입니다.</div>
									<div><input type="radio" onChange={issueHandler} name="issue" value="인권침해"/>명예훼손/사칭/사생활침해 게시물입니다.</div>
									<div><input type="radio" onChange={issueHandler} name="issue" value="개인정보"/>개인정보 노출 게시물입니다.</div>
									<div><input type="radio" onChange={issueHandler} name="issue" value="음란물"/>음란물입니다.</div>
									<div><input type="radio" onChange={issueHandler} name="issue" value="불법정보"/>불법정보를 포함하고 있습니다.</div>
									<div><input type="radio" onChange={issueHandler} name="issue" value="스팸/도배"/>스팸홍보/도배글입니다.</div>
									<div><input type="radio" onChange={issueHandler} name="issue" value="분탕"/>지나친 분란을 유도합니다.</div>
									{/* <div><input type="radio" onChange={issueHandler} name="issue" value="기타"/>기타</div> */}
									<div><input type="radio" onClick={openIssueHandler} name="issue" value="기타"/>직접입력</div>
									{openIssue && 
										<div><textarea placeholder={'신고사유를 입력해주세요.'} onChange={issueInputHandler} value={reportIssue} maxLength={300} /></div>
									}
								</form>
							</ReportList>	
						</ReportBox>
						<Buttons>
							<form >
								<input type="button" onClick={report} value="신고" />
							</form>
						</Buttons>
					</ContentContainer>
				</ReportModalContainer>
			</ModalBackdrop>
		</>
	);
}
