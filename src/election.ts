import { BigInt } from "@graphprotocol/graph-ts";
import {
    CandidateAdded as CandidateAddedEvent,
    Voted as VotedEvent,
} from "../generated/Election/Election";
import { CandidateAdded, Voted, ActiveCandidate } from "../generated/schema";

export function handleCandidateAdded(event: CandidateAddedEvent): void {
    let candidateAdded = CandidateAdded.load(event.params.candidateId.toHexString());
    let activeCandidate = ActiveCandidate.load(event.params.candidateId.toHexString());

    if (!candidateAdded) {
        candidateAdded = new CandidateAdded(event.params.candidateId.toHexString());
    }
    if (!activeCandidate) {
        activeCandidate = new ActiveCandidate(event.params.candidateId.toHexString());
    }

    candidateAdded.candidateId = event.params.candidateId;
    candidateAdded.candidateName = event.params.candidateName;

    activeCandidate.candidateId = event.params.candidateId;
    activeCandidate.candidateName = event.params.candidateName;
    activeCandidate.votes = BigInt.fromI32(0);

    candidateAdded.save();
    activeCandidate.save();
}

export function handleVoted(event: VotedEvent): void {
    let voted = Voted.load(event.params.candidateId.toHexString());
    let activeCandidate = ActiveCandidate.load(event.params.candidateId.toHexString());

    if (!voted) {
        voted = new Voted(event.params.candidateId.toHexString());
    }

    voted.candidateId = event.params.candidateId;
    activeCandidate!.votes = activeCandidate!.votes.plus(BigInt.fromI32(1));

    voted.save();
    activeCandidate!.save();
}
