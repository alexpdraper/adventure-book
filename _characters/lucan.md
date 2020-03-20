---
title: Lucan Venga
alignment: Chaotice Neutral
race: Half Elf
background: Entertainer
gender: Male
age: 26
height: "5' 11\""
weight: 160 lbs
hit_point_max: 18
ac: 14
# img_url: "/assets/images/kaden-profile.jpg"
proficiencies:
  - Lyre
  - Disguise kit
features:
  - By popular demand
ideal: "**Creativity**. The world is in need of new ideas and bold action."
bond: "I want to be famous—whatever it takes."
flaw: I’m a sucker for a pretty face.
classes:
  - title: Bard
    sub_class: College of Lore
    icon: fad fa-mandolin
    level: 3
    hit_dice_type: d8
    spellcasting_ability: charisma
    features:
      - title: Bardic Inspiration (d6)
        description: |
          You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.

          Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.

          You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.

          Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.
        charges: 4
      - title: Jack of All Trades
        description: |
          Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn’t already include your proficiency bonus
      - title: Song of Rest (d6)
        description: |
          Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.

          The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.
      - title: Bard College (College of Lore)
        description: |
          At 3rd level, you delve into the advanced techniques of a bard college of your choice, such as the College of Lore. Your choice grants you features at 3rd level and again at 6th and 14th level.
      - title: Expertise
        description: |
          At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.

          At 10th level, you can choose another two skill proficiencies to gain this benefit.
      - title: Bonus Proficiencies
        description: When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice.
      - title: Cutting Words
        description: |
          Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature's roll. You can choose to use this feature after the creature makes its roll, but before the GM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can't hear you or if it's immune to being charmed.
      # - title: Ability Score Improvement
    spells:
      - Vicious Mockery
      - Blade Ward
      - Thunderwave
      - Heroism
      - Healing Word
      - Disguise Self
      - Suggestion
      - Invisibility
equipment:
  weapons:
    - extends: Rapier
    - extends: Dagger
  armor:
    - extends: Leather
weapon_proficiencies:
  simple:
    melee: true
    ranged: true
  rapier: true
  shortsword: true
  longsword: true
skill_proficiencies:
  acrobatics: 1
  animal_handling: 0.5
  arcana: 0.5
  athletics: 1
  deception: 1
  history: 0.5
  insight: 2
  intimidation: 1
  investigation: 1
  medicine: 0.5
  nature: 0.5
  perception: 1
  performance: 2
  persuasion: 1
  religion: 0.5
  sleight_of_hand: 0.5
  stealth: 1
  survival: 0.5
saving_throw_proficiencies:
  strength: 0
  dexterity: 1
  constitution: 0
  intelligence: 0
  wisdom: 0
  charisma: 1
ability_scores:
  strength: 8
  dexterity: 16
  constitution: 11
  intelligence: 14
  wisdom: 16
  charisma: 18
spell_slots:
  - level: One
    slots: 4
  - level: Two
    slots: 2
---
