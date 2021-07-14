export default function () {
  return {
    // special: bandits, character specific, improvements, raxxon, warring_colonies
    cards: {
      // template: {
      //   name: '',
      //   trigger: '',
      //   intro: '',
      //   options: [
      //     {
      //       label: '',
      //       subtext: '',
      //       result: ''
      //     }
      //   ]
      // },
      army: {
        name: 'Army',
        trigger: 'If a survivor the player controls is at the colony:',
        intro: 'The soldiers in army uniforms make predictable demands - have food ready when they return, or the colony will be burnt to the ground. Every player with 1 or more survivors at the colony must vote with a thumbs up or down. The option with most votes takes effect. The ALTERNATIVE option triggers if Thomas Heart is at the colony.',
        options: [
          {
            label: 'Thumbs Up',
            subtext: 'Abide by the soldiers\' demands',
            result: 'Add the following victory condition to the current main objective: Have 5 food in the supply'
          },
          {
            label: 'Thumbs Down',
            subtext: 'Confront the soldiers',
            result: 'Your ambush is surprisingly effective, and their losses are worse than yours. The cowards flee in a disorganized fashion. Roll a die for each survivor at the colony. On each result of 3 or lower that survivor receives 1 wound.'
          },
          {
            label: 'Alternative',
            subtext: 'If Thomas Heart is at the colony:',
            result: 'Thomas Heart notices that the man calling himself colonel has a sergeant\'s uniform. He calls them on their lie at the gate, and the imposters angrily retreat.'
          }
        ]
      },
      ill_show_them_i_can_help: {
        name: 'I\'ll Show Them I Can Help!',
        trigger: 'If a player is accused of being a betrayer (a casual accusation is enough) and there is at least 1 helpless survivor at the colony:',
        intro: 'Once again, a loud mouth is accusing someone else of betrayal. However, the next morning, the accused is found dead."Who did this?!" you demand. "Me," says a meek little girl in the crowd. "I... I saved everybody... Didn\'t I?" Kill the leader of the player that was being accused of being a betrayer. Every non-exiled player must vote with a thumbs up or down.',
        options: [
          {
            label: 'Thumbs Up',
            subtext: 'Blame the accuser',
            result: 'The fault doesn\'t lay with the girl but with the accuser. Exiler the player that made the accusation.'
          },
          {
            label: 'Thumbs Down',
            subtext: 'Send the little girl packin\'',
            result: 'The girl is exiled from the colony. Remove 1 helpless survivor and lost 1 morale.'
          },
          {
            label: 'Alternative',
            subtext: 'If the colony votes thumbs down, any player may choose this option: leave to protect the girl',
            result: '"Monsters! I\'ll not leave her to die out there." The player that chose this option must remove a survivor they control and 1 helpless survivor. No morale is lost.'
          }
        ]
      },
      oh_what_a_feeling: {
        name: 'Oh What A Feeling...',
        trigger: 'If a human survivor the player controls shares a location a human survivor another player controls and those are the only 2 survivors at that location:',
        intro: 'The storm is unexpected and so is the company. "We should probably share a blanket, right?" you ask awkwardly. You don\'t know each other very well, but the time has passed pleasantly so far. Your hands brush under the blanket. Your eyes lock. Both players that control a survivor at that location must vote on the count of 3 with a thumbs up or down.',
        options: [
          {
            label: 'Thumbs Up',
            subtext: 'Let\'s do this!',
            result: 'You haven\'t felt this alive in ages. Remove all wound markers and despair tokens from both survivors. Each player controlling one of the survivors rolls a die. The player with the higher roll adds the other player\'s survivor to their following.'
          },
          {
            label: 'Thumbs Down',
            subtext: 'Mutual disagreement',
            result: 'You both sleep. Nothing happens.'
          },
          {
            label: 'Split Vote',
            subtext: 'Unrequited desire',
            result: 'That\'s awkward. The player that voted with a thumbs up receives 1 despair token.'
          }
        ]
      },
      riot: {
        name: 'Riot',
        trigger: 'If a player controls a survivor at the colony, there are more helpless survivors in the colony than non-helpless survivors, and there is food in the supply:',
        intro: '"They don\'t care that we\'re starving! I can feel my ribs, yet the pantry door is locked up tight. Why? We need food. Well I don\'t care what those scum bags say - there\'s way more of us than them. I say we break that door down, and if any of them get in our way, well... it\'s their choice if things get ugly."',
        options: [
          {
            label: 'Give In',
            subtext: 'Let the rioters raid the pantry',
            result: 'Remove all food in the supply'
          },
          {
            label: 'Stand Firm',
            subtext: 'Fight back against the rioters',
            result: 'Each non-helpless survivor at the colony receivs 1 wound'
          },
          {
            label: 'Make An Example',
            subtext: 'Kill one of the rioters to make an example',
            result: 'Kill 1 helpless survivor. Lose 1 morale.'
          }
        ]
      }
    },
    counter: 0,
    currentUser: {},
    filter: []
  }
}
