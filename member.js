function skillsMember() {
  return {
    skills: ['JavaScript', 'React', 'Node', 'Express'],
    addSkill: function(skill) {
      this.skills.push(skill);
    }
  };
}