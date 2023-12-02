<script>
    import { Input, Label, Button } from 'flowbite-svelte';
</script>


<div class="flex flex-col gap-8">
    <h1 class="text-3xl text-center">Register</h1>
    <form method="post" class="flex flex-col gap-4">
        <div>
            <Label for="username">Username</Label>
            <Input type="text" name="username" placeholder="Username" />
        </div>
        <div>
            <label for="firstname">Firstname</label>
            <Input type="text" name="firstname" placeholder="Firstname" />
        </div>
        <div>
            <label for="lastname">Lastname</label>
            <Input type="text" name="lastname" placeholder="Lastname" />
        </div>
        <div>
            <label for="email">Email</label>
            <Input type="email" name="email" placeholder="Email" />
        </div>
        <div>
            <label for="password">Password</label>
            <Input type="password" name="password" placeholder="Password" />
        </div>
        <div>
            <label for="confirmpassword">Confirm Password</label>
            <Input type="password" name="confirmPassword" placeholder="Confirm Password" />
        </div>
        <Button type="submit">Register</Button>
    </form>

    <Button color="dark" href="/">Login</Button>
</div>