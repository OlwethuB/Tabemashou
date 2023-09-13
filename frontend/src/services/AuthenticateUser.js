export default {
    async validateCredentials(firstName, userPass) {
      // Use a library like bcrypt to hash the password
      const hashedPassword = await bcrypt.hash(userPass, saltRounds);
  
      // Query the database to check if the email and hashed password match a registered user
      const user = await db.users.findOne({ firstName: firstName });
      if (!user || !user.userPass.equals(hashedPassword)) {
        throw new Error('Invalid credentials');
      }
  
      return user;
    }
  };
  