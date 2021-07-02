export default function () {
  return {
    cards: [
      {
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
      {
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
    ]
  }
}
