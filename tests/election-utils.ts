import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { CandidateAdded, Voted } from "../generated/Election/Election"

export function createCandidateAddedEvent(
  candidateId: BigInt,
  candidateName: string
): CandidateAdded {
  let candidateAddedEvent = changetype<CandidateAdded>(newMockEvent())

  candidateAddedEvent.parameters = new Array()

  candidateAddedEvent.parameters.push(
    new ethereum.EventParam(
      "candidateId",
      ethereum.Value.fromUnsignedBigInt(candidateId)
    )
  )
  candidateAddedEvent.parameters.push(
    new ethereum.EventParam(
      "candidateName",
      ethereum.Value.fromString(candidateName)
    )
  )

  return candidateAddedEvent
}

export function createVotedEvent(candidateId: BigInt): Voted {
  let votedEvent = changetype<Voted>(newMockEvent())

  votedEvent.parameters = new Array()

  votedEvent.parameters.push(
    new ethereum.EventParam(
      "candidateId",
      ethereum.Value.fromUnsignedBigInt(candidateId)
    )
  )

  return votedEvent
}
